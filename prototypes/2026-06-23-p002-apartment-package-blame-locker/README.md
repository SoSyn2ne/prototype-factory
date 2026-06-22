# Apartment Package Blame Locker

Residents and property managers turn package-room photos, locker gaps, and camera claims into a clear theft/loss trail.

## Phase A
- Slot: p002
- Mix label: Practical / Commercial
- Design profile: field-ops
- Theme: 자산 방어 / 외로움 - apartment residents trying not to be ignored when property systems fail.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-06-23/p002/`

## Target user
Apartment residents, leasing-office staff, property managers, and resident-services teams dealing with missing parcels and package-room disputes.

## Key UX
User imports delivery photo, carrier timestamp, locker record, camera status, and leasing-office notes; the app builds a responsibility trail, action checklist, and resident/manager message packet.

## Required UI sections
- Missing package incident intake with carrier, timestamp, and value
- Delivery photo and location annotation canvas
- Locker scan and access-code record comparison
- Camera status and maintenance evidence panel
- Resident-management message timeline
- Refund, police report, and carrier claim checklist
- Building pattern heatmap for recurring loss locations

## Source signal references
- S3 - Reddit r/bayarea, apartment packages stolen and managers blame drivers: https://www.reddit.com/r/bayarea/comments/1ozpme0/for_those_of_you_who_live_in_apartment_buildings/
- S4 - Reddit r/fortlauderdale, package room locker failure and missing parcel: https://www.reddit.com/r/fortlauderdale/comments/1o4nv0d/stealing_packages_at_apartment_complexs/

## Stitch prompt
Build a production-grade web app prototype called "Apartment Package Blame Locker" for apartment residents and property managers resolving missing package disputes. The first screen must be a working incident workspace with missing package intake, delivery photo annotation, locker record comparison, camera status panel, resident-management message timeline, refund and police-report checklist, and building pattern heatmap. Use realistic sample data: Amazon delivery photo in a package room, no locker code issued, camera marked out of service, $189 package value, three prior building incidents, and a leasing-office reply blaming the carrier. Design direction: use the field-ops profile with rugged evidence cards, high-contrast status rows, touch-friendly incident controls, and a restrained safety-orange action accent for next steps. Do not make a marketing landing page; the first screen must be the working app.
