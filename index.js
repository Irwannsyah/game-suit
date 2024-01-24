 var z = true
 while(z){
 var p = prompt('pilih gajah, semut, orang')

  var com = Math.random()
  if(com < 0.34){
    com = 'gajah'
  }else if( com >= 0.34 && com > 0.67){
    com = 'orang'
  }else{
    com = 'semut'
  }
  var hasil = ''

  if( p == com){
    hasil = 'seri'
  }else if( p == 'gajah'){
    hasil = (com == 'semut') ? 'kalah':'menang'
  }else if( p == 'semut'){
    hasil = (com == 'orang') ? 'kalah':'menang'
  }else if( p == 'orang'){
    hasil = (com == 'gajah') ? 'kalah':'menang'
  }else{
    alert('anda memasukkan pilihan yang salah')
  }

  alert('kamu memilih ' + p + ' dan komputer memilih ' + com + ' anda ' + hasil)

  z = confirm('mau mencoba lagi?')
}

alert('terimakasih telah bermain')