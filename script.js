var Types = new Array("منصرف","منصرف إلى مكان آخر","وارد","هادر","اعدام");
  var Sites = new Array("المخزن", "مستشفى دار اسماعيل", "مستشفى القباري", "مستشفى الجمهورية", "مستشفى جمال حمادة", "مستشفى فوزي معاذ", "مستشفى كرموز العمال", "مستشفى صدر كوم الشقافة", "مكتب صحة غيط العنب", "مكتب صحة الجمهورية", "مكتب صحة القباري", "مكتب صحة كرموز", "مكتب صحة مينا البصل", "مكتب صحة الورديان", "طب أسرة كرموز", "طب أسرة المفروزة", "طب أسرة ابن سهلان", "طب أسرة الكارنتينا", "طب أسرة العامود", "طب أسرة ش المتراس", "طب أسرة المتراس", "طب أسرة ج المتراس", "طب أسرة الورديان", "خارج منطقة غرب");
  var vaCCines = new Array();
    vaCCines["المخزن"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح ثنائي رضع", "الانفلونزا البكتيريه", "لقاح كبدي بي كبار", "لقاح كلب", "امينوجلوبين كبدي 200 وحده", "امينوجلوبين كبدي 220 وحده", "مصل تيتانوس 1500 وحدة", "مصل تيتانوس 30000 وحدة", "مصل ضد الثعبان", "مصل ضد العقرب", "مصل كلب 300 وحدة", "مصل كلب 750 وحدة", "مستحضر رابيشيلد 100 وحدة", "انفلونزا موسمية");
    vaCCines["مستشفى دار اسماعيل"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مستشفى القباري"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مستشفى الجمهورية"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "لقاح كلب", "امينوجلوبين كبدي 200 وحده", "امينوجلوبين كبدي 220 وحده", "مصل تيتانوس 1500 وحدة", "مصل تيتانوس 30000 وحدة", "مصل ضد الثعبان", "مصل ضد العقرب", "مصل كلب 300 وحدة", "مصل كلب 750 وحدة", "مستحضر رابيشيلد 100 وحدة", "انفلونزا موسمية");
    vaCCines["مستشفى جمال حمادة"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مستشفى فوزي معاذ"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مستشفى كرموز العمال"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مستشفى صدر كوم الشقافة"] = new Array("لقاح كبدي بي رضع", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة القباري"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح ثنائي رضع", "الانفلونزا البكتيريه", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة غيط العنب"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة الجمهورية"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة كرموز"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة مينا البصل"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["مكتب صحة الورديان"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة كرموز"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح BCG", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة المفروزة"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة ابن سهلان"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة الكارنتينا"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة العامود"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة ش المتراس"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة المتراس"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة ج المتراس"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["طب أسرة الورديان"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
    vaCCines["خارج منطقة غرب"] = new Array("لقاح شلل اطفال ثنائي التكافؤ", "لقاح ثلاثي منشطة", "لقاح خماسي", "لقاح MMR", "لقاح كبدي بي رضع", "لقاح سولك", "لقاح توكسيد تيتانوس", "لقاح كبدي بي كبار", "انفلونزا موسمية");
  var Batches = new Array();
    Batches["لقاح شلل اطفال ثنائي التكافؤ"] = new Array("2044623", "2044723", "2044823", "2044923", "2047223");
    Batches["لقاح ثلاثي منشطة"] = new Array("2822X006A", "2822X010A", "2823X012B");
    Batches["لقاح خماسي"] = new Array("2863X008A", "2863X008B", "2863X023B", "2863X024A");
    Batches["لقاح MMR"] = new Array("0163W010", "0163W011");
    Batches["لقاح كبدي بي رضع"] = new Array("03221016D", "03221017C", "03222016D", "03224008B", "0322L017A", "0322L017B", "0322L017C", "0322X007B", "0322Y007D", "0322Y010A", "0322Y010B", "0322Y010C", "0323Q004C", "0323Q004D", "0323X021E", "0323X021D");
    Batches["لقاح سولك"] = new Array("W3F90", "W3G40", "W3G83", "W3G98", "W3G981V", "X3B18");
    Batches["لقاح BCG"] = new Array("0373MA012", "0373MA042");
    Batches["لقاح توكسيد تيتانوس"] = new Array("2302X002A", "2302X003B", "2303L002A");
    Batches["الانفلونزا البكتيريه"] = new Array("0400922");
    Batches["لقاح ثنائي رضع"] = new Array("A72CB036D");
    Batches["لقاح كبدي بي كبار"] = new Array("0353L013A");
    Batches["لقاح كلب"] = new Array("202310193AV", "202310193AY", "202310194AX", "202310195AY", "202310205AX", "202310305AX", "202311213AX", "202311215AX");
    Batches["امينوجلوبين كبدي 200 وحده"] = new Array("P100588110");
    Batches["امينوجلوبين كبدي 220 وحده"] = new Array("");
    Batches["مصل تيتانوس 1500 وحدة"] = new Array("221125");
    Batches["مصل تيتانوس 30000 وحدة"] = new Array("");
    Batches["مصل ضد الثعبان"] = new Array("230101");
    Batches["مصل ضد العقرب"] = new Array("220203", "230309");
    Batches["مصل كلب 300 وحدة"] = new Array("");
    Batches["مصل كلب 750 وحدة"] = new Array("");
    Batches["مستحضر رابيشيلد 100 وحدة"] = new Array("1873T002", "1873T003");
    Batches["انفلونزا موسمية"] = new Array("");


  function resetForm(theForm) {
    /* reset Types */
    theForm.Types.options[0] = new Option("Please select a Type", "");
    for (var i = 0; i < Types.length; i++) {
      theForm.Types.options[i + 1] = new Option(Types[i], Types[i]);
    }
    /* reset Sites */
    theForm.Sites.options[0] = new Option("Please select a Site", "");
    for (var i = 0; i < Sites.length; i++) {
      theForm.Sites.options[i + 1] = new Option(Sites[i], Sites[i]);
    }
    theForm.Sites.options[0].selected = true;
    /* reset vaCCines */
    theForm.vaCCines.options[0] = new Option("Please select a Vaccine", "");
    theForm.vaCCines.options[0].selected = true;
    /* reset Batches */
    theForm.Batches.options[0] = new Option("Please select a Batch", "");
    theForm.Batches.options[0].selected = true;
  }
  
  function updateVaccines(theForm) {
      var vaCCiness = theForm.Sites.options[theForm.Sites.options.selectedIndex].value;
      var newVaccines = vaCCines[vaCCiness];
      theForm.vaCCines.options.length = 0;
      theForm.vaCCines.options[0] = new Option("Please select a Vaccine", "");
      for (var i = 0; i < newVaccines.length; i++) {
        theForm.vaCCines.options[i + 1] = new Option(newVaccines[i], newVaccines[i]);
      }
      theForm.vaCCines.options[0].selected = true;
    }

  function updateBatches(theForm) {
    var Batchess = theForm.vaCCines.options[theForm.vaCCines.options.selectedIndex].value;
    var newBatches = Batches[Batchess];
    theForm.Batches.options.length = 0;
    theForm.Batches.options[0] = new Option("Please select a Batch", "");
    for (var i = 0; i < newBatches.length; i++) {
      theForm.Batches.options[i + 1] = new Option(newBatches[i], newBatches[i]);
    }
    theForm.Batches.options[0].selected = true;
  }
  /*var params = {
      "range": "Sheet!A1",
      "majorDimension": "ROWS",
      "values": [],
    }
      ('POST', 'https://sheets.googleapis.com/v4/spreadsheets/' + 1RKUeIdf5NlRqd7fjz_VaYAhijVnUyxIHSDviX48QEmM + ':batchUpdate')*/

// Interactive table
document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('vaccineTable');
  const addRowBtn = document.getElementById('addRowBtn');
  const tbody = table.querySelector('tbody');

  addRowBtn.addEventListener('click', addRow);

  function addRow() {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td><input type="date"></td>
          <td>
              <select>
                  <option value="">Select Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
              </select>
          </td>
          <td>
              <select>
                  <option value="">Select Vaccine</option>
                  <option value="vaccine1">Vaccine 1</option>
                  <option value="vaccine2">Vaccine 2</option>
                  <option value="vaccine3">Vaccine 3</option>
              </select>
          </td>
          <td><input type="text" placeholder="Batch Number"></td>
          <td><input type="number" min="0" step="1" placeholder="Quantity"></td>
          <td><button onclick="removeRow(this)">Remove</button></td>
      `;
      tbody.appendChild(newRow);
  }

  window.removeRow = function(button) {
      const row = button.closest('tr');
      row.remove();
  };
});