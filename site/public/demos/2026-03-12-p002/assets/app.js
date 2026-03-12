(function () {
  const STORAGE_KEY = "wedding-memory-capsule-qr-wall-v1";

  const defaultState = {
    approveMode: false,
    messages: [
      {
        id: "seed-1",
        guestName: "Aunt Mina",
        relation: "Family",
        message: "Keep telling each other the small stories from your day. That is how a home stays warm.",
        reaction: "💛",
        hasPhoto: true,
        photoCaption: "Golden-hour hug by table seven",
        status: "approved",
        createdAt: "2026-03-12T09:15:00.000Z"
      },
      {
        id: "seed-2",
        guestName: "Jordan",
        relation: "Friend",
        message: "May your calendar always leave room for one more spontaneous late-night snack run together.",
        reaction: "🥂",
        hasPhoto: false,
        photoCaption: "",
        status: "approved",
        createdAt: "2026-03-12T09:42:00.000Z"
      }
    ]
  };

  const form = document.getElementById("memory-form");
  const approveModeToggle = document.getElementById("approve-mode");
  const exportButton = document.getElementById("export-button");
  const photoToggle = document.getElementById("photo-toggle");
  const photoCaption = document.getElementById("photo-caption");
  const formFeedback = document.getElementById("form-feedback");
  const adminFeedback = document.getElementById("admin-feedback");
  const submissionMode = document.getElementById("submission-mode");
  const approvedFeed = document.getElementById("approved-feed");
  const pendingFeed = document.getElementById("pending-feed");
  const approvedCount = document.getElementById("approved-count");
  const pendingCount = document.getElementById("pending-count");
  const totalCount = document.getElementById("total-count");
  const pendingIntro = document.getElementById("pending-intro");
  const cardTemplate = document.getElementById("message-card-template");

  let state = loadState();

  function cloneDefaultState() {
    return JSON.parse(JSON.stringify(defaultState));
  }

  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return cloneDefaultState();
      }

      const parsed = JSON.parse(raw);
      return sanitizeState(parsed);
    } catch (error) {
      console.warn("Unable to load saved messages.", error);
      return cloneDefaultState();
    }
  }

  function sanitizeState(input) {
    const base = cloneDefaultState();

    return {
      approveMode: Boolean(input && input.approveMode),
      messages: Array.isArray(input && input.messages)
        ? input.messages
            .map(function (message) {
              if (!message || typeof message !== "object") {
                return null;
              }

              return {
                id: typeof message.id === "string" ? message.id : createId(),
                guestName: typeof message.guestName === "string" ? message.guestName : "",
                relation: typeof message.relation === "string" ? message.relation : "Guest",
                message: typeof message.message === "string" ? message.message : "",
                reaction: typeof message.reaction === "string" ? message.reaction : "💛",
                hasPhoto: Boolean(message.hasPhoto),
                photoCaption: typeof message.photoCaption === "string" ? message.photoCaption : "",
                status: message.status === "pending" ? "pending" : "approved",
                createdAt:
                  typeof message.createdAt === "string" && !Number.isNaN(Date.parse(message.createdAt))
                    ? message.createdAt
                    : new Date().toISOString()
              };
            })
            .filter(function (message) {
              return message && message.message.trim();
            })
        : base.messages
    };
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.warn("Unable to save messages.", error);
      return false;
    }
  }

  function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    return "memory-" + Date.now() + "-" + Math.random().toString(16).slice(2);
  }

  function formatTimestamp(isoString) {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(date);
  }

  function setFeedback(target, message) {
    target.textContent = message;
  }

  function updateSubmissionMode() {
    if (state.approveMode) {
      submissionMode.textContent = "Approval is on. New messages stay pending until an admin approves them.";
      pendingIntro.textContent = "Pending messages stay here until someone taps approve.";
      return;
    }

    submissionMode.textContent = "New messages go live right away while approval is off.";
    pendingIntro.textContent = "Turn on approval mode to hold new messages for review.";
  }

  function buildEmptyState(copy) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = copy;
    return empty;
  }

  function buildCard(message) {
    const fragment = cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".message-card");
    const author = fragment.querySelector(".message-author");
    const meta = fragment.querySelector(".message-meta");
    const statusBadge = fragment.querySelector(".status-badge");
    const body = fragment.querySelector(".message-body");
    const photoMemory = fragment.querySelector(".photo-memory");
    const photoLabel = fragment.querySelector(".photo-caption");
    const reactionPill = fragment.querySelector(".reaction-pill");
    const approveButton = fragment.querySelector(".approve-button");

    author.textContent = message.guestName.trim() || "Anonymous guest";
    meta.textContent = message.relation + " · " + formatTimestamp(message.createdAt);
    statusBadge.textContent = message.status === "pending" ? "Pending" : "Public";
    statusBadge.dataset.status = message.status;
    body.textContent = message.message;
    reactionPill.textContent = message.reaction + " Saved locally";

    if (message.hasPhoto) {
      photoMemory.hidden = false;
      photoLabel.textContent = message.photoCaption.trim() || "Simulated photo memory";
    }

    if (message.status === "pending") {
      approveButton.hidden = false;
      approveButton.dataset.id = message.id;
    }

    card.dataset.status = message.status;
    return fragment;
  }

  function renderFeed(list, container, emptyCopy) {
    container.innerHTML = "";

    if (!list.length) {
      container.appendChild(buildEmptyState(emptyCopy));
      return;
    }

    list.forEach(function (message) {
      container.appendChild(buildCard(message));
    });
  }

  function render() {
    const approvedMessages = state.messages
      .filter(function (message) {
        return message.status === "approved";
      })
      .sort(function (left, right) {
        return new Date(right.createdAt) - new Date(left.createdAt);
      });

    const pendingMessages = state.messages
      .filter(function (message) {
        return message.status === "pending";
      })
      .sort(function (left, right) {
        return new Date(right.createdAt) - new Date(left.createdAt);
      });

    approvedCount.textContent = String(approvedMessages.length);
    pendingCount.textContent = String(pendingMessages.length);
    totalCount.textContent = String(state.messages.length);
    approveModeToggle.checked = state.approveMode;
    updateSubmissionMode();

    renderFeed(
      approvedMessages,
      approvedFeed,
      "No public memories yet. The first guest note will appear here once it is approved or submitted while approval is off."
    );
    renderFeed(
      pendingMessages,
      pendingFeed,
      "Nothing is waiting for approval right now."
    );
  }

  function resetForm() {
    form.reset();
    photoCaption.disabled = true;
    const firstReaction = form.querySelector('input[name="reaction"][value="💛"]');

    if (firstReaction) {
      firstReaction.checked = true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback(formFeedback, "");
    setFeedback(adminFeedback, "");

    const formData = new FormData(form);
    const messageBody = String(formData.get("message") || "").trim();
    const relation = String(formData.get("relation") || "").trim();

    if (!relation) {
      setFeedback(formFeedback, "Choose how you know the couple before saving.");
      return;
    }

    if (!messageBody) {
      setFeedback(formFeedback, "Write a short memory or piece of advice before saving.");
      return;
    }

    const hasPhoto = formData.get("hasPhoto") === "on";
    const newMessage = {
      id: createId(),
      guestName: String(formData.get("guestName") || "").trim(),
      relation: relation,
      message: messageBody,
      reaction: String(formData.get("reaction") || "💛"),
      hasPhoto: hasPhoto,
      photoCaption: hasPhoto ? String(formData.get("photoCaption") || "").trim() : "",
      status: state.approveMode ? "pending" : "approved",
      createdAt: new Date().toISOString()
    };

    state.messages.unshift(newMessage);

    if (!saveState()) {
      state.messages.shift();
      setFeedback(formFeedback, "This browser could not save locally. Try exporting or switching browsers.");
      return;
    }

    render();
    resetForm();

    if (newMessage.status === "pending") {
      setFeedback(formFeedback, "Saved locally as pending. Approve it from the moderation queue when ready.");
      return;
    }

    setFeedback(formFeedback, "Saved locally and added to the public wall on this device.");
  }

  function handleApproveClick(event) {
    const button = event.target.closest(".approve-button");

    if (!button) {
      return;
    }

    const messageId = button.dataset.id;
    const message = state.messages.find(function (item) {
      return item.id === messageId;
    });

    if (!message) {
      return;
    }

    message.status = "approved";
    saveState();
    render();
    setFeedback(adminFeedback, "Pending message approved and moved to the public wall.");
  }

  function handleApproveModeChange() {
    const nextValue = approveModeToggle.checked;
    const previousValue = state.approveMode;
    state.approveMode = nextValue;

    if (!saveState()) {
      state.approveMode = previousValue;
      approveModeToggle.checked = previousValue;
      setFeedback(adminFeedback, "Approve mode changed for now, but this browser could not persist it.");
      return;
    }

    render();
    setFeedback(
      adminFeedback,
      state.approveMode
        ? "Approve mode is on. New messages will stay pending."
        : "Approve mode is off. New messages will publish immediately."
    );
  }

  function handleExport() {
    setFeedback(adminFeedback, "");

    const payload = {
      exportedAt: new Date().toISOString(),
      approveMode: state.approveMode,
      totals: {
        approved: state.messages.filter(function (message) {
          return message.status === "approved";
        }).length,
        pending: state.messages.filter(function (message) {
          return message.status === "pending";
        }).length,
        saved: state.messages.length
      },
      messages: state.messages
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");

    downloadLink.href = url;
    downloadLink.download = "wedding-memory-capsule-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(function () {
      window.URL.revokeObjectURL(url);
    }, 0);

    setFeedback(adminFeedback, "JSON export downloaded with the current message set.");
  }

  function handlePhotoToggle() {
    photoCaption.disabled = !photoToggle.checked;

    if (!photoToggle.checked) {
      photoCaption.value = "";
    }
  }

  form.addEventListener("submit", handleSubmit);
  pendingFeed.addEventListener("click", handleApproveClick);
  approveModeToggle.addEventListener("change", handleApproveModeChange);
  exportButton.addEventListener("click", handleExport);
  photoToggle.addEventListener("change", handlePhotoToggle);

  render();
})();
