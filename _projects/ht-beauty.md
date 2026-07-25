---
title: "HT Beauty Clinic"
project_key: "ht-beauty"
category: "Business Analysis · ERP Implementation"
subtitle: "Turning fragmented clinic operations into a structured Odoo ecosystem."
description: "A business-analysis case study on requirement elicitation, gap analysis, and process modeling for a dermatology clinic's Odoo ERP system across CRM, appointments, treatment records, and customer follow-up."
role: "Business Analyst"
role_short: "BA"
hero_visual: "ht-ecosystem"
hero_image_visible: false
hero_image: "/assets/images/ht-beauty/project-cover.webp"
tools:
  - "Odoo 19"
  - "Python"
  - "PostgreSQL"
  - "BPMN / UML"
source_code: "https://github.com/thaodang31231024250-blip/ht_beauty_management_nhomf.git"
project_meta:
  - label: "Role"
    value: "Business Analyst"
  - label: "Duration"
    value: "Apr 2026 – Jun 2026"
  - label: "Team"
    value: "5 members"
  - label: "Domain"
    value: "Dermatology Clinic · CRM · Appointment"
  - label: "Methodology"
    value: "Waterfall"

snapshot_heading: "A fragmented operation needed one shared direction."
snapshot_intro: "The case study focuses on the analysis work that connected business needs, platform capabilities, and implementation priorities."
snapshot:
  - title: "The context"
    text: "Customer data, bookings, medical notes, and follow-up activities were distributed across Google Sheets, Zalo, and paper records."
  - title: "The challenge"
    text: "The clinic needed better control of appointment resources, treatment information, customer ownership, and after-care without over-customizing the ERP."
  - title: "The direction"
    text: "A layered Odoo ecosystem combined standard capabilities, configuration, and focused custom modules for clinic-specific workflows."
  - title: "My contribution"
    text: "I led process analysis, requirement definition, and fit–gap decisions, translating operational pain points into an implementation-ready solution."

demo:
  visible: true
  kicker: "Project demo"
  title: "See the ecosystem working as one connected flow."
  description: "The demo shows how customer information, appointment resources, treatment workflows, and follow-up tasks move through the proposed Odoo solution."
  youtube_id: "AOqt3BUsX_c"
  video_title: "HT Beauty Odoo ecosystem project demo"

role_kicker: "My role & ownership"
role_title: "I translated operational ambiguity into requirements the team could build from."
role_intro: "My work sat between business context, process modeling, and implementation. The goal was to turn scattered pain points into a clear, traceable set of requirements — not to turn every request into customization."
role_ownership:
  - "Analyzed end-to-end AS-IS workflows and consolidated 46 operational gaps."
  - "Defined and documented 33 functional requirements across CRM, booking, treatment, and automation."
  - "Mapped requirements to Standard, Configuration, or Customization decisions in Odoo."
  - "Authored BRD, GAP analysis, and FRD, and supported UAT and implementation validation."

solutions_heading: "The solution was shaped by fit, risk, and maintainability—not feature volume."
solutions_intro: "Each decision balanced immediate operational value with the long-term cost of configuration and custom development."
solutions:
  - title: "Smart Booking & Multi-resource Validation"
    problem: "Manual booking could not reliably validate the availability of customers, doctors or technicians, treatment rooms, and overlapping time windows."
    decision: "Designed a clinic-specific appointment module with layered validation rules and a calendar view that checks critical resources before confirmation."
    tradeoff: "Custom validation increased development scope, but it was reserved for a high-risk workflow that standard scheduling could not fully represent."
    impact: "Reduced preventable booking conflicts and gave reception a clearer real-time view of resource availability."
    media_type: "youtube"
    youtube_id: "k8kv6jTDD14"
    media_title: "HT Beauty smart booking validation demo"
    media_caption: "Demo of resource validation and booking controls in the proposed Odoo workflow."
  - title: "CRM Lead Sync & Deduplication"
    problem: "Leads from digital channels were manually copied into shared sheets, creating delays, inconsistent ownership, and duplicate records."
    decision: "Used Odoo CRM and website lead capture as the central pipeline, supported by duplicate detection, assignment, activities, and traceable communication history."
    tradeoff: "The design prioritized reliable first-party records over reproducing every familiar spreadsheet habit inside the new system."
    impact: "Shortened lead handoff time, reduced duplicate effort, and retained customer context across the funnel."
    media_type: "youtube"
    youtube_id: "LdJThQVXW48"
    media_title: "HT Beauty CRM synchronization demo"
    media_caption: "Demo of lead capture, pipeline synchronization, and duplicate-control behavior."
  - title: "Treatment Lifecycle & Automated Follow-up"
    problem: "Treatment plans, session counts, before-and-after records, and follow-up tasks were separated across paper and manual reminders."
    decision: "Connected digital treatment plans, session records, progress evidence, and scheduled customer-service activities within one lifecycle."
    tradeoff: "Automation was designed to generate accountable tasks rather than fully replace human judgment in customer communication."
    impact: "Expected to improve continuity of information and support a lower no-show rate through structured reminders and follow-up."
    media_type: "image"
    image: "/assets/images/ht-beauty/cronjob-tasks.webp"
    image_alt: "Automated customer follow-up tasks generated in the HT Beauty Odoo system"
    media_title: "Automated follow-up evidence"
    media_caption: "Scheduled follow-up tasks automatically generated after a treatment session is completed."

evidence_enabled: true
evidence_heading: "Documentation that explains why the solution took this shape."
evidence_intro: "Only completed evidence is displayed. Each card opens a right-side reading view with selected findings, decisions, and a link to the original PDF."
evidence:
  - id: "ht-brd"
    visible: true
    type: "Business definition"
    status: "Available"
    title: "Business Requirement Document"
    summary: "The business context, current operational problems, proposed system scope, dependencies, and requirement groups."
    tags:
      - "Business context"
      - "Requirements"
      - "Scope"
    drawer_intro: "This document establishes why the project was needed and translates the clinic's operating problems into a structured business scope for Odoo implementation."
    metrics:
      - value: "4"
        label: "Primary solution areas"
      - value: "3"
        label: "Affected system groups"
    sections:
      - title: "Current operational problems"
        text: "The clinic relied on Google Sheets, Zalo, and paper for lead handling, appointment coordination, treatment records, and customer follow-up."
        bullets:
          - "Fragmented customer data and delayed lead processing."
          - "Shared-sheet security and knowledge-retention risks."
          - "Appointment conflicts involving staff and treatment rooms."
          - "Manual reminders and paper-based treatment records."
      - title: "Proposed solution scope"
        text: "The proposed Odoo 19 Community ecosystem connects CRM, appointments, clinic operations, treatment records, and automation."
        bullets:
          - "Centralized multichannel lead management."
          - "Smart booking with resource validation."
          - "Digital medical and treatment records."
          - "Automated reminder and after-care activities."
    file: "/assets/docs/ht-beauty/BRD_HT_Beauty.pdf"
    download: true
  - id: "ht-gap"
    visible: true
    type: "Solution fit"
    status: "Available"
    title: "Odoo Fit–Gap Analysis"
    summary: "A requirement-by-requirement comparison of current workflows, target workflows, operational risk, and required intervention."
    tags:
      - "46 gaps"
      - "Fit–gap"
      - "Solution mix"
    drawer_intro: "The analysis separates what Odoo can support as standard, what requires configuration, and what justifies custom development for clinic-specific operations."
    metrics:
      - value: "46"
        label: "Operational gaps"
      - value: "36.36%"
        label: "Standard"
      - value: "21.21%"
        label: "Configuration"
      - value: "42.43%"
        label: "Customization"
    sections:
      - title: "How decisions were classified"
        bullets:
          - "Standard: existing Odoo capability could be adopted directly."
          - "Configuration: the capability existed but required setup, access rules, or adjusted behavior."
          - "Customization: clinic-specific data or logic required new development."
      - title: "Representative customization decisions"
        bullets:
          - "Multi-resource appointment validation."
          - "Digital treatment plans and session tracking."
          - "Bulk appointment creation and automated after-care tasks."
    file: "/assets/docs/ht-beauty/Bang_Phan_Tich_GAP_HT_Beauty.pdf"
    download: true
  - id: "ht-frd"
    visible: true
    type: "Functional specification"
    status: "Available"
    title: "Functional Requirements Document"
    summary: "Detailed actors, priorities, system behaviors, validation rules, and Odoo support classifications for implementation and testing."
    tags:
      - "Actors"
      - "Priority"
      - "Validation"
    drawer_intro: "The FRD converts business requirements into implementation-ready behavior for standard features, configuration, custom modules, and user validation."
    metrics:
      - value: "33"
        label: "Functional requirements"
      - value: "8"
        label: "Primary actor groups"
    sections:
      - title: "Functional coverage"
        bullets:
          - "Lead capture, import, filtering, duplicate control, and pipeline management."
          - "Appointments, check-in, rooms, staff assignment, and conflict validation."
          - "Treatment plans, sessions, clinical evidence, promotions, and sales linkage."
          - "Automated reminders, follow-up tasks, reports, and security rules."
    file: "/assets/docs/ht-beauty/FRD_HT_Beauty.pdf"
    download: true

impact_heading: "Clearer scope, stronger traceability, and a more defensible implementation plan."
impact_intro: "The project outputs are presented according to their evidence level. Analyzed counts are separated from estimated or expected operational effects."
impact:
  - label: "Analyzed"
    value: "46"
    text: "Operational gaps identified through end-to-end process analysis."
  - label: "Documented"
    value: "33"
    text: "Functional requirements defined across the proposed ecosystem."
  - label: "Estimated impact"
    value: "~50%"
    text: "Potential reduction in manual data-entry errors through connected workflows and reuse of shared data."
  - label: "Expected impact"
    value: "↓ No-shows"
    text: "Structured reminders and follow-up tasks were designed to support better appointment attendance."

next_project:
  title: "Tra Anh Beverage"
  url: "/projects/tra-anh/"
---
