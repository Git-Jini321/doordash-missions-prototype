# DoorDash Missions: Mobile Prototype Handover Documentation

This comprehensive master document summarizes the architecture, design choices, engineering decisions, and setup details for the **DoorDash Missions Mobile Prototype**. 

You can copy and paste this entire document directly to share with **Michelle, Erik, Shinjini, and Rohan** so everyone is fully aligned for the final MBA Tech Product Management pitch!

---

## 1. Project Vision & Executive Summary
The **DoorDash Missions Prototype** reimagines DoorDash from a transactional "grocery list" search engine into an **intent-based local orchestrator**. Instead of searching for individual items across disparate merchants, the user specifies a high-level goal (a "Mission"—like hosting a dinner party or recovering on a sick day). 

The application coordinates logistics, aggregates a multi-merchant cart, provides context-aware substitutions, and presents a single unified checkout, proving that DoorDash can own the *entire* consumer mission.

---

## 2. Implemented Prototype Features

*   **iPhone 15/16 Device Frame Simulator:** The entire web app renders inside a realistic mobile bezel, featuring curved navigation bars (`rounded-b-[47px]`) and strict layout containment to look and feel exactly like a native iOS demo in a desktop browser.
*   **Dynamic Multi-Merchant Cart:** Demonstrates simultaneous delivery aggregation across 4 distinct simulated merchants:
    *   *Bin 36 Wine Shop*
    *   *Pastoral (Artisanal Cheese)*
    *   *Flowers for Dreams*
    *   *Mariano's Grocery*
*   **AI-Aware Reasoning ("Why these picks?"):** Each item in the curated cart expands to show a custom, context-aware reason detailing why the AI chose it for that specific guest count and mission.
*   **Mission-Aware Substitutions:** Demonstrates an intelligent substitution modal. If the selected white wine is out of stock, instead of recommending a generic replacement, the orchestrator suggests a *Sancerre* or *Vouvray* explicitly because it knows the menu is seafood-leaning and designed for a 6-guest intimate dinner.
*   **Past Missions Timeline:** A beautiful native-like vertical timeline showing completed missions with upvote/downvote satisfaction ratings and a one-click "Run this mission again" button.

---

## 3. Key Engineering Decisions & Rationale

During the final polish, we made several critical decisions to **de-risk the presentation** and maximize visual quality:

### A. The "Wizard of Oz" Flow (Deterministic Stability)
*   **Decision:** The standard voice assistant flow has been hardcoded to run on top of our deterministic local catalog templates.
*   **Rationale:** Live APIs are unpredictable during pitches due to potential Wi-Fi latency, key deprecation, or model hallucinations. Forcing the AI Assistant to use the pre-built mock templates guarantees an instantaneous response and a **100% mathematically correct cart subtotal every single time** without losing any narrative magic.

### B. Math Transparency in the Cart UI
*   **Decision:** Updated the cart items to show the **line-item total** (Price × Quantity) rather than just the unit price, along with an explicit unit price subtitle (e.g., `$30.00 / ea`).
*   **Rationale:** Prevents math confusion. Showing a unit price next to a `3x` badge made the subtotal (which correctly multiplied the price) look wrong to viewers who were simply adding up the numbers on the screen.

### C. State Protection (Double-Order Prevention)
*   **Decision:** Added a global `orderStatus` variable. 
*   **Rationale:** Once an order is placed on the confirmation screen, the button at the bottom of the cart transforms into a green **"Mission in Progress"** banner. This prevents the presenter from accidentally ordering the same mission twice and breaking the demo state.

### D. Parameter Constraint Handling
*   **Decision:** Enabled the "Edit" guest parameters as a purely visual hint of future functionality, backed by a clean toast notification explanation if clicked.
*   **Rationale:** Changing parameters dynamically without an active AI engine to scale quantities would break the "Orchestration" illusion. The toast gracefully handles the interaction.

---

## 4. Setup & Running the Demo

### Local Installation
1.  Navigate to the repository:
    ```bash
    cd mission-orchestrator
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Boot the Next.js development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

### Perfect Demo Script
1.  **Start at the Home Screen:** Call out the iPhone simulator containment and the brand-new official DoorDash favicon header logo.
2.  **Select a Mission:** Click **"Host a dinner party"** or type into the fully enabled **"Other mission..."** button.
3.  **Vibe Selector:** Select **"Intimate Dinner for 6"** on the template selection screen to showcase the predefined curation metadata.
4.  **Review the Smart Cart:** 
    *   Point out the aggregated timeline from multiple merchants (Bin 36, Pastoral, Flowers).
    *   Expand **"Why these picks?"** on any item to show the AI reasoning.
    *   Click **"Try a substitution"** on the first wine item to show the beautiful, slide-up mission-aware Sancerre swap.
5.  **Checkout:** Click **"Place Mission Order"** to hit the pristine "Mission Initiated" confirmation screen.
6.  **Timeline Loop:** Return home, navigate to the **Missions** tab to show the "In Progress" active tracker, and highlight the Completed Missions timeline below!

---

*This prototype is fully complete, completely stable, and pushed directly to your GitHub repository.* Good luck with the Kellogg final pitch! 🏁🏆
