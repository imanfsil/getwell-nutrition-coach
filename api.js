// ============================================================
// GETWELL CLINIC — FINAL SHARED API
// Google Sheets = MASTER DATABASE
// ============================================================

const GETWELL_API_URL =
  "https://script.google.com/macros/s/AKfycbwPYJHJuU-3fzV0s3Upvm3L-xedqsdXyxMTxYrDWGNL-6YHqAEr35eK7q6YkQ584x45pg/exec";


// ============================================================
// CORE GET
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
// CORE POST
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
// DASHBOARD
// ============================================================

async function getDashboard() {
  return apiGet("getDashboard");
}


// ============================================================
// PATIENTS
// ============================================================

async function getPatients() {
  return apiGet("getPatients");
}


async function getPatientDetails(patientId) {

  if (!patientId) {
    throw new Error("Patient ID is required.");
  }

  return apiGet(
    "getPatientDetails",
    {
      patient_id: patientId
    }
  );
}


async function registerPatient(patientData) {

  return apiPost(
    "registerPatient",
    patientData
  );
}


async function savePatient(patientData) {

  return apiPost(
    "savePatient",
    patientData
  );
}


async function updatePatient(patientData) {

  return apiPost(
    "updatePatient",
    patientData
  );
}


// ============================================================
// APPOINTMENTS
// ============================================================

async function getAppointments(params = {}) {

  return apiGet(
    "getAppointments",
    params
  );
}


async function getPatientAppointments(patientId) {

  return apiGet(
    "getAppointments",
    {
      patient_id: patientId
    }
  );
}


async function getAppointment(appointmentId) {

  if (!appointmentId) {
    throw new Error(
      "Appointment ID is required."
    );
  }

  return apiGet(
    "getAppointment",
    {
      appointment_id: appointmentId
    }
  );
}


async function createAppointment(appointmentData) {

  return apiPost(
    "createAppointment",
    appointmentData
  );
}


async function saveAppointment(appointmentData) {

  return apiPost(
    "saveAppointment",
    appointmentData
  );
}


async function updateAppointment(appointmentData) {

  return apiPost(
    "updateAppointment",
    appointmentData
  );
}


async function changeAppointmentStatus(
  appointmentId,
  status
) {

  return apiPost(
    "changeAppointmentStatus",
    {
      appointment_id: appointmentId,
      status: status
    }
  );
}


// ============================================================
// VISITS
// ============================================================

async function getVisits(patientId = "") {

  return apiGet(
    "getVisits",
    patientId
      ? { patient_id: patientId }
      : {}
  );
}


async function addVisit(visitData) {

  return apiPost(
    "addVisit",
    visitData
  );
}


async function saveVisit(visitData) {

  return apiPost(
    "saveVisit",
    visitData
  );
}


// ============================================================
// WEIGHT TRACKING
// ============================================================

async function getWeightTracking(
  patientId = ""
) {

  return apiGet(
    "getWeightTracking",
    patientId
      ? { patient_id: patientId }
      : {}
  );
}


async function addWeight(weightData) {

  return apiPost(
    "addWeight",
    weightData
  );
}


async function saveWeight(weightData) {

  return apiPost(
    "saveWeight",
    weightData
  );
}


// ============================================================
// DOCTORS
// ============================================================

async function getDoctors() {

  return apiGet("getDoctors");
}


async function addDoctor(doctorData) {

  return apiPost(
    "addDoctor",
    doctorData
  );
}


async function saveDoctor(doctorData) {

  return apiPost(
    "saveDoctor",
    doctorData
  );
}


async function updateDoctor(doctorData) {

  return apiPost(
    "updateDoctor",
    doctorData
  );
}


// ============================================================
// DOCTOR SCHEDULE
// ============================================================

async function getDoctorSchedule(
  params = {}
) {

  return apiGet(
    "getDoctorSchedule",
    params
  );
}


async function saveDoctorSchedule(
  scheduleData
) {

  return apiPost(
    "saveDoctorSchedule",
    scheduleData
  );
}


async function updateDoctorSchedule(
  scheduleData
) {

  return apiPost(
    "updateDoctorSchedule",
    scheduleData
  );
}


// ============================================================
// DAILY WELLNESS
// ============================================================

async function getDailyWellness(
  patientId = ""
) {

  return apiGet(
    "getDailyWellness",
    patientId
      ? { patient_id: patientId }
      : {}
  );
}


async function addWellness(
  wellnessData
) {

  return apiPost(
    "addWellness",
    wellnessData
  );
}


async function saveWellness(
  wellnessData
) {

  return apiPost(
    "saveWellness",
    wellnessData
  );
}


// ============================================================
// SETTINGS
// ============================================================

async function getSettings() {

  return apiGet("getSettings");
}


async function saveSetting(
  settingData
) {

  return apiPost(
    "saveSetting",
    settingData
  );
}


// ============================================================
// ACTIVITY LOG
// ============================================================

async function getActivityLog() {

  return apiGet("getActivityLog");
}


// ============================================================
// USERS
// ============================================================

async function getUsers() {

  return apiGet("getUsers");
}


// ============================================================
// PATIENT ID FROM URL
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
// ============================================================

function escapeHtmlSafe(value) {

  return String(
    value ?? ""
  ).replace(
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
// DATE / TIME DISPLAY
// ============================================================

function formatDateTime(value) {

  if (!value) {
    return "—";
  }

  const d = new Date(
    String(value).replace(
      " ",
      "T"
    )
  );

  if (
    Number.isNaN(
      d.getTime()
    )
  ) {
    return String(value);
  }

  return d.toLocaleString(
    "en-MY",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }
  );
}


function formatDateOnly(value) {

  if (!value) {
    return "—";
  }

  const d = new Date(
    String(value).replace(
      " ",
      "T"
    )
  );

  if (
    Number.isNaN(
      d.getTime()
    )
  ) {
    return String(value);
  }

  return d.toLocaleDateString(
    "en-MY",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  );
}


// ============================================================
// ERROR HANDLER
// ============================================================

function showApiError(
  error,
  fallbackMessage =
    "Something went wrong."
) {

  console.error(
    "Getwell API error:",
    error
  );

  const message =
    error &&
    error.message
      ? error.message
      : fallbackMessage;

  alert(message);
}


// ============================================================
// LOADING
// ============================================================

function setLoading(
  element,
  loading = true,
  text = "Loading..."
) {

  if (!element) {
    return;
  }

  if (loading) {

    element.dataset.originalContent =
      element.innerHTML;

    element.innerHTML =
      text;

    element.disabled =
      true;

  } else {

    if (
      element.dataset.originalContent
      !== undefined
    ) {

      element.innerHTML =
        element.dataset.originalContent;

      delete element.dataset
        .originalContent;
    }

    element.disabled =
      false;
  }
}


// ============================================================
// BACKEND HEALTH
// ============================================================

async function checkBackendHealth() {

  return apiGet("health");

}


// ============================================================
// GLOBAL API OBJECT
// ============================================================

window.GetwellAPI = {

  apiGet,
  apiPost,

  getDashboard,

  getPatients,
  getPatientDetails,
  registerPatient,
  savePatient,
  updatePatient,

  getAppointments,
  getPatientAppointments,
  getAppointment,
  createAppointment,
  saveAppointment,
  updateAppointment,
  changeAppointmentStatus,

  getVisits,
  addVisit,
  saveVisit,

  getWeightTracking,
  addWeight,
  saveWeight,

  getDoctors,
  addDoctor,
  saveDoctor,
  updateDoctor,

  getDoctorSchedule,
  saveDoctorSchedule,
  updateDoctorSchedule,

  getDailyWellness,
  addWellness,
  saveWellness,

  getSettings,
  saveSetting,

  getActivityLog,
  getUsers,

  getPatientIdFromUrl,
  escapeHtmlSafe,
  formatDateTime,
  formatDateOnly,

  showApiError,
  setLoading,

  checkBackendHealth
};
