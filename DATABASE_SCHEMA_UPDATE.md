# Database Schema Update for Bootcamp Detail Pages

## Overview
This document outlines the additional fields that need to be added to the Firebase `bootcamps` collection to support the dynamic bootcamp detail pages.

## Current API Response
The current API at `/api/bootcamps/[id]` returns basic bootcamp information but is missing fields needed for the complete detail page functionality as seen in the reference page `/bootcamps/web3-blockchain`.

## Required Database Fields to Add

### Basic Metadata Fields
These fields should be added directly to the bootcamp document:

```typescript
// Already exists in types but may be missing in database
modality: string // e.g., "Online en vivo + sesiones híbridas"
certificate: string // e.g., "NFT + Diploma PDF"
```

### Complex Nested Fields
These fields require structured data and should be added as arrays/objects:

#### 1. Syllabus Structure
```typescript
syllabus: SyllabusStage[] = [
  {
    stage: string, // "Introducción a Web3 y Blockchain"
    description: string,
    color: string, // "from-blue-500 to-cyan-500"
    bgColor: string, // "bg-gradient-to-br from-blue-50 to-cyan-50"
    borderColor: string, // "border-blue-200"
    sessions: SyllabusSession[] = [
      {
        title: string,
        icon: string, // Icon name or component reference
        iconBg: string, // "bg-blue-500"
        description: string,
        deliverables: string,
        duration: string, // "2 horas"
        resources: string[] // ["Video introductorio", "Whitepaper de Bitcoin"]
      }
    ]
  }
]
```

#### 2. Instructors Array
```typescript
instructors: Instructor[] = [
  {
    id: string,
    name: string, // "Mirna Ampuero"
    role: string, // "Tech Educator & Web3 Advocate"
    photo: string, // "/instructor/mirna.png"
    description: string
  }
]
```

#### 3. FAQ Array
```typescript
faq: FAQItem[] = [
  {
    id: string,
    icon: string, // "🎓"
    iconColor: string, // "bg-blue-500"
    question: string,
    answer: string,
    order_index: number
  }
]
```

#### 4. Partners Array
```typescript
partners: Partner[] = [
  {
    id: string,
    name: string, // "Crypto Brunch"
    logo: string, // "/partners/web3foundation.png"
    description: string,
    website?: string
  }
]
```

#### 5. Workshops Array
```typescript
workshops: Workshop[] = [
  {
    id: string,
    title: string,
    description: string,
    icon: string, // Icon name or component reference
    iconBg: string, // "bg-blue-500"
    color: string, // "from-blue-500 to-cyan-500"
    duration: string, // "2 horas"
    type: string, // "Workshop", "Hands-on Lab"
    difficulty: string, // "Principiante", "Intermedio"
    tools: string[], // ["MetaMask", "Remix IDE"]
    outcomes: string[] // ["Wallet configurada", "Entorno listo"]
  }
]
```

## Implementation Steps

### 1. Update Existing Bootcamp Documents
Add the new fields to existing bootcamp documents in Firebase. These can start as empty arrays or have default values:

```javascript
// Example Firestore update
db.collection('bootcamps').doc('bootcamp-id').update({
  modality: "Online en vivo + sesiones híbridas",
  certificate: "NFT + Diploma PDF",
  syllabus: [],
  instructors: [],
  faq: [],
  partners: [],
  workshops: []
});
```

### 2. Admin Interface Updates
The admin interface will need to be updated to allow editing of these new fields:

- **Syllabus Builder**: Create/edit syllabus stages and sessions
- **Instructor Management**: Add/edit instructor profiles
- **FAQ Management**: Create/edit FAQ items with ordering
- **Partners Management**: Add/edit partner information
- **Workshop Builder**: Create/edit workshop details

### 3. Data Migration Strategy
For the web3-blockchain reference bootcamp:
1. Extract the hardcoded data from the reference page
2. Structure it according to the new schema
3. Import it into the database
4. Test the dynamic page with real data

## Benefits
Once implemented, this will allow:
- ✅ Complete bootcamp detail pages with dynamic content
- ✅ Admin-editable bootcamp content
- ✅ Consistent data structure across all bootcamps
- ✅ Easy addition of new bootcamps without code changes
- ✅ SEO-friendly URLs with dynamic content

## Files Updated
- `/lib/types/bootcamp.ts` - Added new interface definitions
- `/app/api/bootcamps/[id]/route.ts` - Updated API to return new fields
- `/app/bootcamps/[id]/page.tsx` - Created dynamic page using new data structure