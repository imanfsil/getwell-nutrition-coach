// ============================================================
// GETWELL CLINIC — SHARED API CONNECTION
// Google Sheets = Master Database
// ============================================================

const GETWELL_API_URL =
  "https://script.google.com/macros/s/AKfycbyEd_pPCXSMFKVm7dM1sMenZ-Cz72fUFSRfUwrtizMZ-Zqb4JeadMX-GKJxwA-zCzXy/exec";


// ============================================================
// GET REQUEST
// ============================================================

async function apiGet(action, params = {}) {

  const query = new URLSearchParams({
    action,
    ...params
  });

  const response = await fetch(
    `${GETWELL_API_URL}?${query.toString()}`,
    {
      method: "GET",
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(
      `Backend request failed (${response.status})`
    );
  }

  const data = await response.json();

  if (!data.ok) {
    throw new Error(
      data.error || "Backend request failed."
    );
  }

  return data;
}


// ============================================================
// POST REQUEST
// ============================================================

async function apiPost(action, payload = {}) {

  const response = await fetch(
    GETWELL_API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body: JSON.stringify({
        action,
        ...payload
      })
    }
  );

  if (!response.ok) {
    throw new Error(
      `Backend request failed (${response.status})`
    );
  }

  const data = await response.json();

  if (!data.ok) {
    throw new Error(
      data.error || "Backend request failed."
    );
  }

  return data;
}


// ============================================================
// GET PATIENT ID FROM URL
// Example:
// patient-details.html?id=GW0001
// ============================================================

function getPatientIdFromUrl() {

  return (
    new URLSearchParams(
      window.location.search
    ).get("id") || ""
  );

}


// ============================================================
// SAFE HTML
// Prevents database text from being inserted as raw HTML
// ============================================================

function escapeHtmlSafe(value) {

  return String(value ?? "").replace(
    /[&<>'"]/g,

    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    })[character]

  );

}


// ============================================================
// API ERROR HANDLER
// ============================================================

function showApiError(
  error,
  fallbackMessage = "Something went wrong."
) {

  console.error(
    "Getwell API error:",
    error
  );

  const message =
    error && error.message
      ? error.message
      : fallbackMessage;

  alert(message);

}


// ============================================================
// LOADING HELPER
// ============================================================

function setLoading(
  element,
  loading = true,
  text = "Loading..."
) {

  if (!element) return;


  if (loading) {

    element.dataset.originalContent =
      element.innerHTML;

    element.innerHTML = text;

    element.disabled = true;

  } else {

    if (
      element.dataset.originalContent !==
      undefined
    ) {

      element.innerHTML =
        element.dataset.originalContent;

      delete element.dataset.originalContent;

    }

    element.disabled = false;

  }

}


// ============================================================
// BACKEND HEALTH CHECK
// ============================================================

async function checkBackendHealth() {

  return apiGet("health");

}
