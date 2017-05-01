var true_answers = [3, 1, 3, 3, 1, 2, 3, 1, 3, 1],
    answers = [],
    result = [],
    name = '';

function get_answer(num) {
  return parseInt($('input[name=answer' + ++num + ']:checked').val());
}

$('#test-form').submit(function(e) {
  e.preventDefault();

  for (i=0; i <= 9; i++) {
    answers[i] = get_answer(i);
  }

  for (i=0; i <= 9; i++) {
    if (answers[i] == true_answers[i]) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }

  name = $('#fio').val();
  $('#result-name').append(name);
  for (i=0; i <= 9; i++) {
    var qnumber = i + 1;
    if (result[i]) {
      $('#result-table>tbody').append('<tr><td>Вопрос ' + qnumber + '</td><td>' + answers[i] + '</td><td>' + true_answers[i] + '</td><td><i class="material-icons">done_all</i></td></tr>');
    } else {
      $('#result-table>tbody').append('<tr><td>Вопрос ' + qnumber + '</td><td>' + answers[i] + '</td><td>' + true_answers[i] + '</td><td><i class="material-icons">warning</i></td></tr>');
    }
  }

  $('#test').hide();
  $('#result').show();
})

$('#result').hide();
