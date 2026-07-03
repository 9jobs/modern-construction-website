# Modern Properties Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the full Modern Properties website from a construction company message to a property buying, development coordination, renovation management, and property selling message without changing the visual design.

**Architecture:** Update shared content sources first so repeated messaging shifts site-wide, then patch route-level hardcoded copy, homepage/nav/footer wording, and construction-themed image references. Finish with full-text verification and a production redeploy of the exact Vercel project serving `modernproperties.co`.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vercel

---
