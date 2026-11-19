/* Lensy LensHero na karcie produktu i w koszyku.
   Ten sam kod liczy prototyp i trafi (po dopasowaniu selektorów) do zmiany wizualnej w GrowthBooku.

   Zasada z regulaminu (§ 1 pkt 7): 10 zł = 4 Lensy, liczone za każde pełne 10 zł.
   Wymiana (§ 1 pkt 4): 1000 Lensów = kod rabatowy 25 zł, więc 1 Lens = 2,5 gr.
   Karta: cena, po której klient dodaje produkt do koszyka (cena po promocji).
   Koszyk: wartość produktów po rabatach i kodzie rabatowym, bez kosztu dostawy. */
(function (w) {
  'use strict';

  function lensy(zl) {
    if (!(zl > 0)) return 0;
    return Math.floor(zl / 10 + 1e-9) * 4;
  }

  function wartoscZl(l) {
    return l * 0.025;
  }

  function liczba(n) {
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function zl(n) {
    var s = n.toFixed(2).split('.');
    return s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ',' + s[1] + ' zł';
  }

  /* Polska odmiana: 1 Lens, 2-4 Lensy, 5+ Lensów (12-14 Lensów). */
  function slowo(n) {
    var j = n % 10, d = n % 100;
    if (n === 1) return 'Lens';
    if (j >= 2 && j <= 4 && !(d >= 12 && d <= 14)) return 'Lensy';
    return 'Lensów';
  }

  w.LensHero = { lensy: lensy, wartoscZl: wartoscZl, liczba: liczba, zl: zl, slowo: slowo };
})(window);
