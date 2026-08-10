// Getwell shared API client. Google Sheets is the source of truth.
const GETWELL_API_URL = "https://script.google.com/macros/s/AKfycbyysVYfFU-wxvhib67EUGYvUnT1CNU8QHJBk5iSDZbGhoUyjB9LIgzEYaapO-6TMPsSQw/exec";

async function apiGet(action, params={}) {
  const qs = new URLSearchParams({action, ...params});
  const res = await fetch(`${GETWELL_API_URL}?${qs.toString()}`, {cache:'no-store'});
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || 'API request failed');
  return data;
}

async function apiPost(action, payload={}) {
  const res = await fetch(GETWELL_API_URL, {
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({action,...payload})
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || 'API request failed');
  return data;
}

function getPatientIdFromUrl(){
  return new URLSearchParams(location.search).get('id') || '';
}

function escapeHtmlSafe(v){
  return String(v ?? '').replace(
    /[&<>'"]/g,
    c => ({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      "'":'&#39;',
      '"':'&quot;'
    }[c])
  );
}

function showApiError(err){
  console.error(err);
  alert(err.message || String(err));
}
