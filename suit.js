function getpilihanKomputer(){
  const comp = Math.random();

  if (comp < 0.34) return 'Gunting';
  if (comp >= 0.34 && comp < 0.67 ) return 'Batu';
  return 'Kertas';
}

function getHasil(comp, player){
  if ( player == comp) return 'Seri';
  if (player == 'Gunting') return (comp == 'Kertas') ? 'Kamu Menang' : 'Kamu Kalahh';
  if (player == 'Kertas') return (comp == 'Gunting') ? 'Kamu kalah' : 'Kamu Menangg';
  if (player == 'Batu') return (comp == 'Kertas') ? 'Kamu kalah' : 'Kamu Menang'; 
}

const pGunting = document.querySelector('.Gunting');
pGunting.addEventListener('click', function(){
  const pilihanKomputer = getpilihanKomputer();
  const pilihanPlayer = pGunting.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);
  
  const imgKomputer = document.querySelector('.img-komputer');
  imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer + '.png');

  const hasilSuit = document.querySelector('.info');
  hasilSuit.innerHTML = hasil; 
});

const pBatu = document.querySelector('.Batu');
pBatu.addEventListener('click', function(){
  const pilihanKomputer = getpilihanKomputer();
  const pilihanPlayer = pBatu.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);
  
  const imgKomputer = document.querySelector('.img-komputer');
  imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer + '.png');

  const hasilSuit = document.querySelector('.info');
  hasilSuit.innerHTML = hasil; 
});

const pKertas = document.querySelector('.Kertas');
pKertas.addEventListener('click', function(){
  const pilihanKomputer = getpilihanKomputer();
  const pilihanPlayer = pKertas.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);
  
  const imgKomputer = document.querySelector('.img-komputer');
  imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer + '.png');

  const hasilSuit = document.querySelector('.info');
  hasilSuit.innerHTML = hasil; 
});


