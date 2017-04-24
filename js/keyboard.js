$(document).ready(function() {

  clickedTextBox = $();

  $('#textbox').focus(function() {
  	$('#romajiKeyboard').addClass('active');
    $('#textBoxR').val($(this).val());
    clickedTextBox = $(this);
  });

  $('#textbox').blur(function() {
    $('#romajiKeyboard').removeClass('active');
  });
  
  /*  romaji keyboard start */
  $('#textBoxR').focus(function() {
    $('#romajiKeyboard').addClass('active');
  });
  
  $('#textBoxR').blur(function() {
    $('#romajiKeyboard').removeClass('active');
  });
  
  $('.add-text').click(function() {
    textbox = $('#textBoxR');
    $(textbox).val($(textbox).val() + $(this).text());
  });

  
  $('#romajiKeyboard > div > button').focus(function() {
  	$('#romajiKeyboard').addClass('active');
  });
  
  $('#romajiKeyboard > div > button').blur(function() {
  	$('#romajiKeyboard').removeClass('active');
  });
  
  $('#romajiKeyboard').focus(function() {
  	$('#romajiKeyboard').addClass('active');
  });
  
  $('#romajiKeyboard').blur(function() {
  	$('#romajiKeyboard').removeClass('active');
  });

  // lowermost buttons
  $('#romaji-close').click(function() {
    $('#romajiKeyboard').removeClass('active');
    $('#textBoxR').val('');
    keyboardToUpper();
  });
  
  $('#romaji-modoru').click(function() {
    text = $('#textBoxR').val();
    text = text.slice(0, -1);
    $('#textBoxR').val(text);
  });

  $('#romaji-suuji').click(function() {
    $('#numericKeyboard').addClass('active');
    $('#romajiKeyboard').removeClass('active');
    $('#textBoxR').val('');
    $('#numericKeyboard').focus();
    keyboardToUpper();
  });

  $('#romaji-kana').click(function() {
    $('#kanaKeyboard').addClass('active');
    $('#romajiKeyboard').removeClass('active');
    $('#textBoxR').val('');
    $('#kanaKeyboard').focus();
    keyboardToUpper();
  });

  $('#romaji-kettei').click(function() {
    clickedTextBox.val($('#textBoxR').val());
    $('#romajiKeyboard').removeClass('active');
    $('#textBoxR').val('');
    keyboardToUpper();
  });

  $('#romaji-komoji').click(function() {
    if ( $(this).text() == '小文字') {
      keyboardToLower();
    } else {
      keyboardToUpper();
    }
  });
  $("#textBoxR").attr("disabled", "disabled");
  /*  romaji keyboard end */







  $('#textbox2').focus(function() {
    $('#numericKeyboard').addClass('active');
    $('#textBoxN').val($(this).val());
    clickedTextBox = $(this);
  });

  $('#textbox2').blur(function() {
    $('#numericKeyboard').removeClass('active');
  });


  /*  numeric keyboard start */
  $('.add-num').click(function() {
    textbox = $('#textBoxN');
    $(textbox).val($(textbox).val() + $(this).text());
  });

  $('#numericKeyboard > div > button').focus(function() {
    $('#numericKeyboard').addClass('active');
  });
  
  $('#numericKeyboard > div > button').blur(function() {
    $('#numericKeyboard').removeClass('active');
  });
  
  $('#numericKeyboard').focus(function() {
    $('#numericKeyboard').addClass('active');
  });
  
  $('#numericKeyboard').blur(function() {
    $('#numericKeyboard').removeClass('active');
  });

  $('#textBoxN').focus(function() {
    $('#numericKeyboard').addClass('active');
  });
  
  $('#textBoxN').blur(function() {
    $('#numericKeyboard').removeClass('active');
  });

  // lowermost buttons
  $('#romaji').click(function() {
    $('#romajiKeyboard').addClass('active');
    $('#numericKeyboard').removeClass('active');
    $('#textBoxN').val('');
    $('#romajiKeyboard').focus();
  });

  $('#num-clear').click(function() {
    $('#textBoxN').val('');
  });

  $('#num-back').click(function() {
    text = $('#textBoxN').val();
    text = text.slice(0, -1);
    $('#textBoxN').val(text);
  });

  $('#num-sen').click(function() {
    textbox = $('#textBoxN');
    $(textbox).val($(textbox).val() + '000');
  });

  $('#num-man').click(function() {
    textbox = $('#textBoxN');
    $(textbox).val($(textbox).val() + '0000');
  });

  $('#num-close').click(function() {
    $('#numericKeyboard').removeClass('active');
    $('#textBoxN').val('');
  });

  $('#num-kettei').click(function() {
    clickedTextBox.val($('#textBoxN').val());
    $('#numericKeyboard').removeClass('active');
    $('#textBoxN').val('');
  });

  $("#textBoxN").attr("disabled", "disabled");
  /*  numeric keyboard end */


  $('#textbox3').focus(function() {
    $('#kanaKeyboard').addClass('active');
    $('#textBoxK').val($(this).val());
    checkLastChar();
    clickedTextBox = $(this);
  });

  $('#textbox3').blur(function() {
    $('#kanaKeyboard').removeClass('active');
  });


  /*  kana keyboard start */
  $('#textBoxK').focus(function() {
    $('#kanaKeyboard').addClass('active');
  });
  
  $('#textBoxK').blur(function() {
    $('#kanaKeyboard').removeClass('active');
  });
  
  $('.add-kana').click(function() {
    textbox = $('#textBoxK');
    $(textbox).val($(textbox).val() + $(this).text());
    checkLastChar();
  });

  
  $('#kanaKeyboard > div > button').focus(function() {
    $('#kanaKeyboard').addClass('active');
  });
  
  $('#kanaKeyboard > div > button').blur(function() {
    $('#kanaKeyboard').removeClass('active');
  });
  
  $('#kanaKeyboard').focus(function() {
    $('#kanaKeyboard').addClass('active');
  });
  
  $('#kanaKeyboard').blur(function() {
    $('#kanaKeyboard').removeClass('active');
  });

  // lowermost buttons
  $('#kana-close').click(function() {
    $('#kanaKeyboard').removeClass('active');
    $('#textBoxK').val('');
  });

  $('#kana-romaji').click(function() {
    $('#romajiKeyboard').addClass('active');
    $('#kanaKeyboard').removeClass('active');
    $('#textBoxK').val('');
    $('#romajiKeyboard').focus();
  });

  $('#kana-modoru').click(function() {
    text = $('#textBoxK').val();
    text = text.slice(0, -1);
    $('#textBoxK').val(text);
    checkLastChar();
  });

  $('#kana-kettei').click(function() {
    clickedTextBox.val($('#textBoxK').val());
    $('#kanaKeyboard').removeClass('active');
    $('#textBoxK').val('');
  });

  $('#kana-komoji').click(function() {
    if ( $(this).text() == '小文字') {
      kanaToLower();
    } else {
      kanaToUpper();
    }
  });

  $('#kana-s1').click(function() {
    changeLastChar(0);
    checkLastChar();
    $('#kanaKeyboard').focus();
  });

  $('#kana-s2').click(function() {
    changeLastChar(1);
    checkLastChar();
    $('#kanaKeyboard').focus();
  });
  
  $("#textBoxK").attr("disabled", "disabled");
  disableButtons();

  /*  kana keyboard end */


});

/*  romaji keyboard function start */

function keyboardToUpper() {
  $('#romajiKeyboard > div:nth-child(2) > button:first-child').text('Q');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(2)').text('W');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(3)').text('E');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(4)').text('R');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(5)').text('T');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(6)').text('Y');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(7)').text('U');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(8)').text('I');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(9)').text('O');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(10)').text('P');

  $('#romajiKeyboard > div:nth-child(3) > button:first-child').text('A');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(2)').text('S');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(3)').text('D');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(4)').text('F');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(5)').text('G');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(6)').text('H');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(7)').text('J');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(8)').text('K');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(9)').text('L');

  $('#romajiKeyboard > div:nth-child(4) > button:first-child').text('Z');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(2)').text('X');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(3)').text('C');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(4)').text('V');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(5)').text('B');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(6)').text('N');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(7)').text('M');

  $('#romajiKeyboard > div:last-child > button:nth-child(4)').text('小文字');
}

function keyboardToLower() {
  $('#romajiKeyboard > div:nth-child(2) > button:first-child').text('q');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(2)').text('w');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(3)').text('e');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(4)').text('r');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(5)').text('t');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(6)').text('y');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(7)').text('u');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(8)').text('i');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(9)').text('o');
  $('#romajiKeyboard > div:nth-child(2) > button:nth-child(10)').text('p');

  $('#romajiKeyboard > div:nth-child(3) > button:first-child').text('a');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(2)').text('s');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(3)').text('d');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(4)').text('f');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(5)').text('g');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(6)').text('h');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(7)').text('j');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(8)').text('k');
  $('#romajiKeyboard > div:nth-child(3) > button:nth-child(9)').text('l');

  $('#romajiKeyboard > div:nth-child(4) > button:first-child').text('z');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(2)').text('x');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(3)').text('c');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(4)').text('v');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(5)').text('b');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(6)').text('n');
  $('#romajiKeyboard > div:nth-child(4) > button:nth-child(7)').text('m');

  $('#romajiKeyboard > div:last-child > button:nth-child(4)').text('大文字');
}

/*  romaji keyboard function end */




/*  kana keyboard function start */

function kanaToUpper() {
  $('#kanaKeyboard > div:nth-child(2) > button:nth-child(3)').text('ヤ');
  $('#kanaKeyboard > div:nth-child(2) > button:nth-child(10)').text('ア');
  $('#kanaKeyboard > div:nth-child(3) > button:nth-child(3)').text('ユ');
  $('#kanaKeyboard > div:nth-child(3) > button:nth-child(10)').text('イ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(3)').text('ヨ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(7)').text('ツ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(10)').text('ウ');
  $('#kanaKeyboard > div:nth-child(5) > button:nth-child(10)').text('エ');
  $('#kanaKeyboard > div:nth-child(6) > button:nth-child(10)').text('オ');
  $('#kanaKeyboard > div:last-child > button:nth-child(3)').text('小文字');
  $(':button.upper-case').removeAttr('disabled');
  $(':button.upper-case').removeClass('disabled');
}

function kanaToLower() {
  $('#kanaKeyboard > div:nth-child(2) > button:nth-child(3)').text('ャ');
  $('#kanaKeyboard > div:nth-child(2) > button:nth-child(10)').text('ァ');
  $('#kanaKeyboard > div:nth-child(3) > button:nth-child(3)').text('ュ');
  $('#kanaKeyboard > div:nth-child(3) > button:nth-child(10)').text('ィ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(3)').text('ョ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(7)').text('ッ');
  $('#kanaKeyboard > div:nth-child(4) > button:nth-child(10)').text('ゥ');
  $('#kanaKeyboard > div:nth-child(5) > button:nth-child(10)').text('ェ');
  $('#kanaKeyboard > div:nth-child(6) > button:nth-child(10)').text('ォ');
  $('#kanaKeyboard > div:last-child > button:nth-child(3)').text('大文字');

  $(':button.upper-case').attr('disabled','disabled');
  $(':button.upper-case').addClass('disabled');

}

function disableButtons(){
  $('#kana-s1').attr('disabled','disabled');
  $('#kana-s1').addClass('disabled');
  $('#kana-s2').attr('disabled','disabled');
  $('#kana-s2').addClass('disabled');

}

function enableButtons(type){
  if ( type == 0) {
    $('#kana-s1').removeAttr('disabled');
    $('#kana-s1').removeClass('disabled');
    $('#kana-s2').attr('disabled','disabled');
    $('#kana-s2').addClass('disabled');
  } else if ( type == 1 ) {
    $('#kana-s1').removeAttr('disabled');
    $('#kana-s1').removeClass('disabled');
    $('#kana-s2').removeAttr('disabled');
    $('#kana-s2').removeClass('disabled');
  }
}

function checkLastChar(){
  lastChar = getLastChar();
  if ( lastChar == 'カ' || lastChar == 'キ' || lastChar == 'ク' || lastChar == 'ケ' || lastChar == 'コ' || 
       lastChar == 'サ' || lastChar == 'シ' || lastChar == 'ス' || lastChar == 'セ' || lastChar == 'ソ' || 
       lastChar == 'タ' || lastChar == 'チ' || lastChar == 'ツ' || lastChar == 'テ' || lastChar == 'ト' ){
       enableButtons(0);
  } else if ( lastChar == 'ハ' || lastChar == 'ヒ' || lastChar == 'フ' || lastChar == 'ヘ' || lastChar == 'ホ' ) {
       enableButtons(1);
  } else {
       disableButtons();
  }
}

function getLastChar(){
  text = $('#textBoxK').val();
  lastChar = text[text.length -1];
  return lastChar;
}

function changeLastChar(type) {
  lastChar = getLastChar();
  newVal = $('#textBoxK').val();
 
  if (type == 0) {
    switch (lastChar) {
        case 'カ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ガ'));
            break;
        case 'キ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ギ'));
            break;
        case 'ク':
            $('#textBoxK').val((newVal.slice(0,-1) + 'グ'));
            break;
        case 'ケ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ゲ'));
            break;
        case 'コ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ゴ'));
            break;

        case 'サ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ザ'));
            break;
        case 'シ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ジ'));
            break;
        case 'ス':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ズ'));
            break;
        case 'セ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ゼ'));
            break;
        case 'ソ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ゾ'));
            break;

        case 'タ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ダ'));
            break;
        case 'チ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ヂ'));
            break;
        case 'ツ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ヅ'));
            break;
        case 'テ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'デ'));
            break;
        case 'ト':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ド'));
            break;

        case 'ハ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'バ'));
            break;
        case 'ヒ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ビ'));
            break;
        case 'フ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ブ'));
            break;
        case 'ヘ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ベ'));
            break;
        case 'ホ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ボ'));
            break; } 

  } else if (type == 1) {

    switch (lastChar) {
        case 'ハ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'パ'));
            break;
        case 'ヒ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ピ'));
            break;
        case 'フ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'プ'));
            break;
        case 'ヘ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ぺ'));
            break;
        case 'ホ':
            $('#textBoxK').val((newVal.slice(0,-1) + 'ポ'));
            break; }

  }



}


/*
dakuten: 

    ガ ギ　グ　ゲ　ゴ
    ザ　ジ　ズ　ゼ　ゾ
    ダ　ヂ　ヅ　デ　ド

    パ　ピ　プ　ぺ　ポ
    バ　ビ　ブ　ベ　ボ

*/

/*  kana keyboard function end */