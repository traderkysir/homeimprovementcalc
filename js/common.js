// HomeImprovCalc — common.js

document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('toolSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = this.value.toLowerCase().trim();
      document.querySelectorAll('.tool-card').forEach(function (card) {
        card.style.display = q === '' || card.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
      document.querySelectorAll('.section').forEach(function (sec) {
        var visible = Array.from(sec.querySelectorAll('.tool-card')).some(c => c.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';
      });
    });
  }
});

function round(val, dec) {
  return Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
}

function getNum(id) {
  var el = document.getElementById(id);
  if (!el) return NaN;
  var v = parseFloat(el.value);
  return isNaN(v) || v < 0 ? NaN : v;
}

function getSel(id) {
  var el = document.getElementById(id);
  return el ? el.value : '';
}

function showResult(boxId) {
  var box = document.getElementById(boxId);
  if (box) {
    box.classList.add('show');
    setTimeout(function () {
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}

function fmtNum(val, dec) {
  dec = dec !== undefined ? dec : 2;
  return round(val, dec).toLocaleString('en-US', {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  });
}

function fmtMoney(val) {
  return '$' + Math.round(val).toLocaleString('en-US');
}

// Add waste factor
function addWaste(qty, pct) {
  return qty * (1 + pct / 100);
}
