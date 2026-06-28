# Ofoq Al Diafah — Comprehensive Variables & Data Fields Reference

---

## CSS Custom Properties (Design Tokens)

| Variable | Value |
|---|---|
| `--font-scale` | `1` |
| `--gold` | `#BE9C5C` |
| `--gold-light` | `#F0E4CC` |
| `--gold-dark` | `#8A6E3A` |
| `--cream` | `#F3F0EF` |
| `--cream-dark` | `#E8E4E2` |
| `--ink` | `#010101` |
| `--ink-mid` | `#3A3630` |
| `--ink-muted` | `#7A746E` |
| `--border` | `rgba(190,156,92,0.18)` |
| `--border-strong` | `rgba(190,156,92,0.35)` |
| `--surface` | `#FFFFFF` |
| `--surface-alt` | `#F3F0EF` |
| `--red` | `#C0392B` |
| `--red-light` | `#FDECEA` |
| `--green` | `#1A6B3C` |
| `--green-light` | `#E8F5EE` |
| `--blue` | `#1A4A7A` |
| `--blue-light` | `#E8F0F9` |
| `--amber` | `#8A5E00` |
| `--amber-light` | `#FEF3E2` |
| `--shadow` | `0 2px 16px rgba(1,1,1,0.08)` |
| `--shadow-lg` | `0 8px 32px rgba(1,1,1,0.14)` |
| `--r` | `10px` |
| `--r-sm` | `6px` |

Dark mode overrides `--surface`, `--cream`, `--ink`, `--border` etc. with dark equivalents.

---

## JavaScript Global Variables

### Supabase / Sync Layer

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | Supabase project URL (injected at build) |
| `SUPABASE_KEY` | Supabase anon key (injected at build) |
| `_sbClient` | Live Supabase client instance |
| `_cache` | In-memory mirror of all `oad_kv` rows from Supabase — takes precedence over localStorage |
| `DB_KEYS` | List of keys synced to Supabase |
| `_dbBootPromise` | Promise that resolves once the initial sync is complete |
| `DB` | Object with `.load(key)` / `.save(key, data)` methods |
| `Prefs` | Object with `.get(key)` / `.set(key, value)` for user preferences |

### Persisted Data Arrays (live app data)

| Variable | What it holds |
|---|---|
| `rooms` | Room inventory records |
| `vouchers` | B2B group booking vouchers |
| `confirmations` | Booking confirmations |
| `batches` | Batch payment records |
| `invLog` | Invoice log |
| `vouLog` | Voucher log |
| `hotels` | Hotel records (rooms, meals, contracts, allotments) |
| `mutamers` | Individual pilgrim / guest records |
| `hotelReservations` | B2C and direct hotel reservations |
| `busReservations` | Bus / transport reservations |
| `busCompanies` | Transportation company records |
| `tours` | Tour package records |
| `providers` | Service provider records |
| `clientCompanies` | Client / agency company records |
| `notifications` | In-app notifications |
| `itTickets` | IT support tickets |
| `settings` | App-wide settings object |

### Auto-Incrementing Counters

| Variable | Purpose |
|---|---|
| `guestIdCounter` | Next guest ID |
| `voucherCounter` | Next voucher number |
| `confCounter` | Next confirmation number |
| `batchCounter` | Next batch number |

### Navigation & UI State

| Variable | Purpose |
|---|---|
| `currentUser` | Logged-in user object |
| `_navHistory` | Browser-history stack for in-app navigation |
| `_navHistoryIdx` | Current position in nav history |
| `_navSkipPush` | Flag to suppress nav-history push on back/forward |
| `dashEditMode` | Whether the dashboard is in widget-edit mode |
| `_dragSrcId` | Source widget ID during dashboard drag-and-drop |
| `_fontScale` | Current font scale multiplier |

### Module Edit State

| Variable | Purpose |
|---|---|
| `editingHotelId` | ID of the hotel currently open in the editor |
| `editingBusId` | ID of the bus company in the editor |
| `editingTourId` | ID of the tour in the editor |
| `editingProviderId` | ID of the provider in the editor |
| `editingClientId` | ID of the client company in the editor |
| `editingMutamerId` | ID of the mutamer in the editor |
| `editingTicketId` | ID of the IT ticket in the editor |
| `openFromWizard` | Whether hotel editor was opened from the setup wizard |

### Form / Wizard Row Counters

| Variable | Purpose |
|---|---|
| `wizardStep` | Current setup wizard step |
| `roomConfigCount` | Room-type rows in hotel wizard |
| `mealPlanCount` | Meal-plan rows in hotel wizard |
| `guestBlocks` | Guest rows in voucher form |
| `roomBlocks` | Room-conf rows in voucher form |
| `hotelConfCount` | Hotel-conf rows in voucher form |
| `transportCount` | Transport rows in voucher form |
| `nvpCurrentStep` | Current step in new-voucher wizard |
| `mealRows` | Meal rows in a booking form |
| `iresMealCount` | Meal rows in individual reservation form |
| `iresTourCount` | Tour rows in individual reservation form |
| `dbHotelCount` | Hotel rows in direct booking form |
| `b2cGuestCount` | Extra guest rows in B2C booking form |
| `b2cHotelCount` | Hotel-conf rows in B2C booking form |
| `busFleetCount` | Fleet rows in bus company editor |
| `busRouteCounters` | `{arrival, departure, visits, intercity}` route row counts |
| `pvServiceCount` | Service rows in provider editor |
| `clBranchCount` | Branch rows in client company editor |
| `tourPricingCount` | Pricing rows in tour editor |
| `_bmCount` | Bulk mutamer import row count |
| `_obStep` | Step in the on-boarding wizard |

### Other State Variables

| Variable | Purpose |
|---|---|
| `calDate` | Currently displayed month in the calendar |
| `racDate` | Date in the room allocation calendar |
| `csvPendingRows` | Rows pending after CSV import |
| `csvPendingVoucherId` | Voucher being targeted by CSV import |
| `tkAttachments` | Attachments staged for the current IT ticket |
| `tourAgreementData` | Agreement data for tour being edited |
| `_waSelected` | Selected WhatsApp template |
| `_waOnSend` | Callback for WhatsApp send action |
| `_nbrLegIdx` | Current leg index in the NBR form |
| `_userDeptFilter` | Active department filter on the users page |

### Constants & Configuration

| Variable | Purpose |
|---|---|
| `WIDGET_DEFS` | Dashboard widget definitions |
| `DEFAULT_DASH` | Default dashboard widget layout |
| `HIJRI_MONTHS` | Arabic Hijri month names array |
| `HOTEL_ROOM_TYPES` | Allowed room type names |
| `HOTEL_VIEWS` | Allowed room view names |
| `LOOKUP_DEFAULTS` | Default values for all lookup lists |
| `LOOKUP_INPUT_IDS` | Maps lookup keys to their input element IDs |
| `FIELD_COORD_PAGES` | Pages accessible to field-coordinator role |
| `FIELD_COORD_HIDDEN_NAV` | Nav items hidden from field coordinators |
| `NVP_TOTAL_STEPS` | Total steps in new-voucher wizard (4) |
| `OB_STEPS` | Total steps in on-boarding wizard (4) |
| `TICKET_PRIORITY_CFG` | IT ticket priority labels / colours |
| `TICKET_STATUS_CFG` | IT ticket status labels / colours |
| `DEPARTMENTS` | List of department names |
| `DEPT_COLORS` | Department colour mapping |
| `ACCESS_LABELS` / `ACCESS_COLORS` | User role display configuration |
| `TR_COLUMNS` | Column definitions for the transaction / report table |
| `SUPER_ADMIN` | Super-admin credential configuration |

---

## Data Entity Field Reference

---

### Hotel (`hotels[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID (auto-generated) |
| `createdAt` | string | Date created |
| `name` | string | Hotel name |
| `city` | string | City (Makkah / Madinah / etc.) |
| `stars` | string | Star rating |
| `category` | string | `luxury` / `midrange` / `economical` |
| `brand` | string | Hotel brand / chain |
| `address` | string | Street address |
| `distance` | number | Distance from Haram (metres) |
| `zone` | string | Zone / district |
| `phone` | string | Hotel phone |
| `email` | string | Hotel email |
| `contact` | string | Contact person name |
| `website` | string | Website URL |
| `notes` | string | Internal notes |
| `roomTypes` | array | See Hotel → roomTypes below |
| `meals` | array | See Hotel → meals below |

#### Hotel → `roomTypes[]`

| Field | Type | Description |
|---|---|---|
| `type` | string | Room type name (Single / Double / Triple / Quad / Suite / etc.) |
| `capacity` | number | Maximum occupancy |
| `views` | string[] | Selected room views |
| `contractType` | string | `none` / `agreement` / `allotment` |
| `hasAgreement` | boolean | True when contractType is `agreement` |
| `cost` | number | Cost per night (SAR) |
| `sellPrice` | number | Selling price per night (SAR) |
| `startDate` | string | Contract start date |
| `endDate` | string | Contract end date |
| `allotmentRooms` | number | Total rooms in allotment block |
| `allotmentMeals` | number | Meals included in allotment |

#### Hotel → `meals[]`

| Field | Type | Description |
|---|---|---|
| `type` | string | Meal type (Breakfast / Half Board / Full Board / etc.) |
| `contractType` | string | `none` / `agreement` / `allotment` |
| `hasAgreement` | boolean | True when contractType is `agreement` |
| `cost` | number | Cost per person (SAR) |
| `sellPrice` | number | Selling price per person (SAR) |
| `startDate` | string | Contract start date |
| `endDate` | string | Contract end date |
| `allotmentCount` | number | Total meal slots in allotment block |

---

### Voucher (`vouchers[]`) — B2B Group Booking

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `ref` | string | Voucher reference (e.g. `VCH-2026-001`) |
| `createdAt` | string | Date created |
| `status` | string | Workflow status (e.g. `Tentative – Pending Reservation`) |
| `agency` | string | Client agency name |
| `agencyRef` | string | Agency's own reference number |
| `ourCompany` | string | Our operating company |
| `leaderName` | string | Group leader name |
| `leaderPhone` | string | Group leader phone |
| `agent` | string | Agent name |
| `agentPhone` | string | Agent phone |
| `agentEmail` | string | Agent email |
| `paxTotal` | number | Total pilgrims |
| `paxMen` | number | Male count |
| `paxWomen` | number | Female count |
| `arrDate` | string | Arrival date |
| `arrFlight` | string | Arrival flight number |
| `arrAirport` | string | Arrival airport |
| `arrTime` | string | Arrival time |
| `depDate` | string | Departure date |
| `depFlight` | string | Departure flight number |
| `depAirport` | string | Departure airport |
| `depTime` | string | Departure time |
| `checkIn` | string | Earliest check-in date |
| `checkOut` | string | Latest check-out date |
| `guests` | array | Guest list |
| `rooms` | array | Room assignments |
| `meals` | array | Meal plan rows |
| `hotelConfs` | array | Hotel configurations |
| `transport` | array | Transport legs |
| `extras` | string[] | Extra services selected |
| `extTour` | boolean | Bus Tour / Ziyarah included |
| `extAirport` | boolean | Airport transfer included |
| `extLaundry` | boolean | Laundry included |
| `notes` | string | Internal notes |
| `totalRoomCost` | number | Calculated total room cost (SAR) |
| `totalRoomSell` | number | Calculated total room sell (SAR) |
| `totalMealCost` | number | Calculated total meal cost (SAR) |
| `totalMealSell` | number | Calculated total meal sell (SAR) |
| `totalCost` | number | Combined total cost (SAR) |
| `totalSell` | number | Combined total sell (SAR) |

#### Voucher → `guests[]`

| Field | Type |
|---|---|
| `name` | string |
| `sex` | string (`Male` / `Female`) |
| `passport` | string |
| `nationality` | string |
| `dob` | string |
| `phone` | string |

#### Voucher → `hotelConfs[]`

| Field | Type |
|---|---|
| `hotelId` | string |
| `hotelName` | string |
| `city` | string |
| `roomType` | string |
| `rooms` | number |
| `checkIn` | string |
| `checkOut` | string |
| `contractType` | string (`none` / `agreement` / `allotment`) |
| `mealType` | string |
| `mealContractType` | string (`none` / `agreement` / `allotment`) |
| `cost` | number |
| `sellPrice` | number |
| `mealPrice` | number |

#### Voucher → `meals[]`

| Field | Type |
|---|---|
| `type` | string |
| `basis` | string (`per_person` / `flat`) |
| `cost` | number |
| `sellPrice` | number |
| `notes` | string |

#### Voucher → `transport[]`

| Field | Type |
|---|---|
| `leg` | string (arrival / departure / visit / intercity) |
| `busCompanyId` | string |
| `busCompanyName` | string |
| `busType` | string |
| `buses` | number |
| `pax` | number |
| `date` | string |
| `from` | string |
| `to` | string |
| `cost` | number |
| `sellPrice` | number |
| `notes` | string |

---

### Mutamer (`mutamers[]`) — Individual Pilgrim

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `createdAt` | string | Date added |
| `firstName` | string | First name |
| `middleName` | string | Middle name |
| `lastName` | string | Last name |
| `sex` | string | Male / Female |
| `dob` | string | Date of birth |
| `nationality` | string | Nationality |
| `passportNo` | string | Passport number |
| `passportExpiry` | string | Passport expiry date |
| `idNumber` | string | National ID number |
| `phone` | string | Phone number |
| `voucherId` | string | Linked voucher ID |

---

### Hotel Reservation (`hotelReservations[]`) — B2C & B2B Direct

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `voucherId` | string / null | Linked voucher (null for B2C) |
| `voucherRef` | string | Reference (e.g. `B2C-xxxxxx`) |
| `confRef` | string | Confirmation reference |
| `agency` | string | Guest or agency name |
| `groupRef` | string | Group reference |
| `agentPhone` | string | Phone |
| `agentEmail` | string | Email |
| `paxTotal` | number | Total guests |
| `paxMen` | number | Male count |
| `paxWomen` | number | Female count |
| `guests` | array | All guests (primary + extras) |
| `hotelConfs` | array | Hotel configurations (same shape as voucher) |
| `rooms` | array | Room assignments |
| `meals` | array | Meal rows |
| `checkIn` | string | Earliest check-in |
| `checkOut` | string | Latest check-out |
| `sellPrice` | number | Total selling price |
| `vatApplied` | boolean | VAT toggled on |
| `vatRate` | number | VAT rate (%) |
| `vatAmount` | number | VAT amount (SAR) |
| `totalWithVat` | number | Price including VAT |
| `deposit` | number | Deposit paid |
| `paymentMethod` | string | Cash / Bank Transfer / etc. |
| `paymentStatus` | string | Pending / Partial / Paid |
| `status` | string | Pending / Active / Completed |
| `notes` | string | Internal notes |
| `isB2C` | boolean | True for individual B2C bookings |
| `hotelStatuses` | string[] | Per-hotel status (progress tracking) |
| `hotelRefs` | string[] | Per-hotel confirmation references |
| `hotelNotes` | string[] | Per-hotel notes |
| `roomOverrides` | object | Per-hotel bed/room count overrides |
| `selectedRooms` | array | Rooms allocated from inventory |
| `mealData` | object | Per-meal count / cost / sell overrides |
| `confirmedBy` | string | Staff member who confirmed |
| `completedAt` | string | Date completed |

#### B2C Primary Guest fields

| Field | Type |
|---|---|
| `name` | string |
| `groupName` | string |
| `dob` | string |
| `nationality` | string |
| `phone` | string |
| `whatsapp` | string |
| `email` | string |

#### B2C Extra Guest fields

| Field | Type |
|---|---|
| `name` | string |
| `sex` | string |
| `passport` | string |
| `nationality` | string |
| `phone` | string |
| `whatsapp` | string |

---

### Bus Company (`busCompanies[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `createdAt` | string | Date added |
| `name` | string | Company name |
| `city` | string | Base city |
| `license` | string | License number |
| `years` | number | Years in operation |
| `contact` | string | Contact person |
| `phone` | string | Phone |
| `whatsapp` | string | WhatsApp |
| `email` | string | Email |
| `routes` | string | Routes served (free text) |
| `svcZiyarah` | boolean | Offers Ziyarah tours |
| `svcAirport` | boolean | Offers airport transfers |
| `svcIntercity` | boolean | Offers intercity transport |
| `svcDedicated` | boolean | Offers dedicated buses |
| `svcNight` | boolean | Offers night service |
| `notes` | string | Internal notes |
| `routePricing` | array | Priced route legs |

#### Bus Company → `routePricing[]`

| Field | Type |
|---|---|
| `leg` | string (arrival / departure / visit / intercity) |
| `busType` | string |
| `seats` | number |
| `costPerBus` | number |
| `sellPerBus` | number |
| `notes` | string |

---

### Tour (`tours[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `createdAt` | string | Date added |
| `name` | string | Tour name |
| `city` | string | City |
| `type` | string | Tour type (Ziyarah – Makkah / etc.) |
| `duration` | string | Duration description |
| `description` | string | Full description |
| `busCompanyId` | string | Linked bus company ID |
| `busCompanyName` | string | Bus company name (denormalised) |
| `pricing` | array | Per-bus-type pricing |
| `costPerPerson` | number | Per-person cost (SAR) |
| `sellPerPerson` | number | Per-person sell price (SAR) |
| `minPax` | number | Minimum group size |
| `maxPax` | number | Maximum group size |
| `contractRef` | string | Contract reference |
| `contractStart` | string | Contract start date |
| `contractEnd` | string | Contract end date |
| `agreement` | object / null | Agreement file data |
| `notes` | string | Notes |

#### Tour → `pricing[]`

| Field | Type |
|---|---|
| `busType` | string |
| `seats` | number |
| `costPerBus` | number |
| `sellPerBus` | number |

---

### Provider (`providers[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `createdAt` | string | Date added |
| `name` | string | Company name |
| `type` | string | Catering / Laundry / Guide / Medical / Logistics / etc. |
| `city` | string | City |
| `cr` | string | Commercial registration number |
| `contact` | string | Contact person |
| `phone` | string | Phone |
| `whatsapp` | string | WhatsApp |
| `email` | string | Email |
| `services` | array | Service offerings |
| `paymentTerms` | string | Payment terms |
| `contractRef` | string | Contract reference |
| `notes` | string | Notes |

#### Provider → `services[]`

| Field | Type |
|---|---|
| `name` | string |
| `unit` | string (Per Person / Per KG / Per Day / Per Bus / etc.) |
| `rate` | number |
| `notes` | string |

---

### Client Company (`clientCompanies[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `createdAt` | string | Date added |
| `nameEn` | string | English company name |
| `nameLocal` | string | Local language name |
| `type` | string | Travel Agency / Tour Operator / etc. |
| `nationality` | string | Nationality |
| `country` | string | Country |
| `city` | string | City |
| `state` | string | State / Province |
| `address` | string | Street address |
| `postal` | string | Postal code |
| `cr` | string | Commercial registration number |
| `tax` | string | Tax number |
| `licence` | string | IATA / trade licence number |
| `year` | number | Year founded |
| `contactName` | string | Primary contact name |
| `contactTitle` | string | Contact's job title |
| `phone` | string | Phone |
| `whatsapp` | string | WhatsApp |
| `email` | string | Operations email |
| `billingEmail` | string | Finance / billing email |
| `website` | string | Website URL |
| `paymentTerms` | string | Payment terms |
| `credit` | number | Credit limit (SAR) |
| `contractStart` | string | Contract start date |
| `contractEnd` | string | Contract end date |
| `notes` | string | Notes |
| `branches` | array | Branch offices |

#### Client Company → `branches[]`

| Field | Type |
|---|---|
| `name` | string |
| `city` | string |
| `contact` | string |
| `phone` | string |
| `email` | string |

---

### IT Ticket (`itTickets[]`)

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique ID |
| `ref` | string | Ticket number (e.g. `TKT-0001`) |
| `createdAt` | string | Date created |
| `updatedAt` | string | Date last updated |
| `title` | string | Short title |
| `description` | string | Full description |
| `category` | string | Bug / Feature / Access / Performance / etc. |
| `priority` | string | Low / Medium / High / Critical |
| `module` | string | Affected app module |
| `reporter` | string | Who reported it |
| `status` | string | Open / In Progress / Resolved / Closed |
| `assigned` | string | Assigned to |
| `resolution` | string | Resolution notes |
| `attachments` | array | Attached files |
| `log` | array | Audit trail `{ts, action, by}` |

---

### App Settings (`settings`)

Stored as a single object.

| Field | Description |
|---|---|
| `vatRate` | Default VAT rate percentage (e.g. `"15"`) |
| `ourCompanies` | List of operating company names |
| `dashConfig` | Dashboard widget layout (widgets, order, sizes) |

---

## Lookup Lists

User-configurable via Settings → Lookups. Stored under `Prefs.get('lookups')`.

| Key | Default values include |
|---|---|
| `types` | Single, Double, Triple, Quad, Suite, Junior Suite, Presidential Suite, Family, Studio, Connecting |
| `mealTypes` | No Meals, BB, Breakfast, Lunch, Half Board, Full Board, International, FB Indonesian, Full Board Turkey, Economy |
| `views` | Haram View, City View, Mountain View, Garden View, Pool View, Courtyard View, Street View, Sea View |
| `cities` | Makkah, Madinah, Jeddah, Taif, Riyadh |
| `areas` | District / neighbourhood names |
| `cancellations` | Cancellation policy templates |
| `refunds` | Refund policy templates |
| `ports` | Airport / port codes |
| `portCityMap` | Maps port code → city name |
| `transportCompanies` | Quick-add transport company names |
| `ourCompanies` | Our own operating company names |
