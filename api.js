// ============================================================
// GETWELL CLINIC — FINAL SHARED API
// GOOGLE SHEETS = MASTER DATABASE
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

  const result = await response.json();

  if (!result.ok) {
    throw new Error(
      result.error || "Backend request failed."
    );
  }

  // IMPORTANT:
  // Code.gs returns { ok:true, data:data }
  return result.data;
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

  const result = await response.json();

  if (!result.ok) {
    throw new Error(
      result.error || "Backend request failed."
    );
  }

  return result.data;
}


// ============================================================
// HEALTH
// ============================================================

async function getHealth() {
  return apiGet("health");
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
    throw new Error(
      "Patient ID is required."
    );
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

async function createPatient(patientData) {
  return apiPost(
    "createPatient",
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

  if (!patientId) {
    throw new Error(
      "Patient ID is required."
    );
  }

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
      appointment_id:
        appointmentId
    }
  );
}

async function createAppointment(
  appointmentData
) {

  return apiPost(
    "createAppointment",
    appointmentData
  );
}

async function saveAppointment(
  appointmentData
) {

  return apiPost(
    "saveAppointment",
    appointmentData
  );
}

async function updateAppointment(
  appointmentData
) {

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
      appointment_id:
        appointmentId,
      status
    }
  );
}


// ============================================================
// VISITS
// ============================================================

async function getVisits(patientId) {

  return apiGet(
    "getVisits",
    {
      patient_id: patientId
    }
  );
}

async function saveVisit(visitData) {

  return apiPost(
    "saveVisit",
    visitData
  );
}

async function addVisit(visitData) {

  return apiPost(
    "addVisit",
    visitData
  );
}


// ============================================================
// WEIGHT TRACKING
// ============================================================

async function getWeightTracking(
  patientId
) {

  return apiGet(
    "getWeightTracking",
    {
      patient_id: patientId
    }
  );
}

async function saveWeight(weightData) {

  return apiPost(
    "saveWeight",
    weightData
  );
}

async function addWeight(weightData) {

  return apiPost(
    "addWeight",
    weightData
  );
}


// ============================================================
// DOCTORS
// ============================================================

async function getDoctors() {

  return apiGet(
    "getDoctors"
  );
}

async function saveDoctor(
  doctorData
) {

  return apiPost(
    "saveDoctor",
    doctorData
  );
}

async function addDoctor(
  doctorData
) {

  return apiPost(
    "addDoctor",
    doctorData
  );
}

async function updateDoctor(
  doctorData
) {

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
// SETTINGS
// ============================================================

async function getSettings() {

  return apiGet(
    "getSettings"
  );
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
// DAILY WELLNESS
// ============================================================

async function getWellness(
  patientId
) {

  return apiGet(
    "getWellness",
    {
      patient_id: patientId
    }
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

async function addWellness(
  wellnessData
) {

  return apiPost(
    "addWellness",
    wellnessData
  );
}


// ============================================================
// REPORTS
// ============================================================

async function getReports(
  params = {}
) {

  return apiGet(
    "getReports",
    params
  );
}


// ============================================================
// ACTIVITY LOG
// ============================================================

async function getActivityLog() {

  return apiGet(
    "getActivityLog"
  );
}


// ============================================================
// GLOBAL API OBJECT
// ============================================================

window.GetwellAPI = {

  apiGet,
  apiPost,

  getHealth,

  getDashboard,

  getPatients,
  getPatientDetails,
  registerPatient,
  createPatient,
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
  saveVisit,
  addVisit,

  getWeightTracking,
  saveWeight,
  addWeight,

  getDoctors,
  saveDoctor,
  addDoctor,
  updateDoctor,

  getDoctorSchedule,
  saveDoctorSchedule,
  updateDoctorSchedule,

  getSettings,
  saveSetting,

  getWellness,
  saveWellness,
  addWellness,

  getReports,

  getActivityLog
};


// ============================================================
// BACKWARD COMPATIBILITY
// Existing pages can still call apiGet/apiPost directly.
// ============================================================

console.log(
  "Getwell API connected:",
  GETWELL_API_URL
);
