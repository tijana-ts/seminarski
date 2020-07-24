
var i;
var teniseri;  
var slika = 1;
var ucesnici = new Array();
ucesnici[0] = "Novak Đoković";
ucesnici[1] = "Dominik Tim";
ucesnici[2] = "Aleksandar Zverev";
ucesnici[3] = "Grigor Dmitrov";
ucesnici[4] = "Borna Čorić";
ucesnici[5] = "Marin Čilić";
ucesnici[6] = "Viktor Troicki";
ucesnici[7] = "Filip Krajinović";
ucesnici[8] = "Dušan Lajović";
ucesnici[9] = "Damir Džumhur";
ucesnici[10] = "Andrej Rubljov";
ucesnici[11] = "Danilo Petrović";
ucesnici[12] = "Peđa Kristin";

var opisi = new Array();
opisi[0] = "Novak Đoković (Beograd, 22. maj 1987) srpski je profesionalni teniser. Na prvom mestu ATP liste je proveo više od 280 nedelja. Mnogi teniski kritičari, bivši igrači i saigrači smatraju Đokovića jednim od najboljih tenisera u istoriji. Profesionalno igra od 2003. godine. U dosadašnjoj karijeri osvojio je sedamnaest titula na grend slem turnirima: osam puta Otvoreno prvenstvo Australije, pet puta Vimbldon, tri puta Otvoreno prvenstvo SAD i jedanput Rolan Garos. Jedan je od petorice tenisera u Open eri koji su osvojili grend slem karijere. Osvajanjem Rolan Garosa 2016. postao je prvi teniser, nakon Roda Lejvera 1969, sa pobedama na sva četiri grend slem turnira u nizu i jedini koji je to ostvario na tri različite podloge. Drži rekord po osvojenim trofejima na Otvorenom prvenstvu Australije i jedini je koji je trijumfovao tri puta zaredom u Open eri. Rekorder je i po zaradi od turnira u muškom singlu.";
opisi[1] = "Dominik Tim (nem. Dominic Thiem; rođen 3. septembra, 1993. godine u Viner Nojštatu) je teniser iz Austrije, koji je svoj najbolji plasman u pojedinačnoj konkurenciji dostigao 2. marta 2020. kada je prvi put zauzeo treće mesto na ATP listi. U dosadašnjoj karijeri je triput dolazio do finala grend slem turnira, osvojio 16 ATP trofeja, uključujući i jedan iz Masters 1000 serije u Indijan Velsu.";
opisi[2] = "Aleksandar „Saša“ Zverev (nem. Alexander „Sascha“ Zverev; Hamburg, 20. april 1997) nemački je teniser ruskog porekla. Najbolji plasman na ATP rang listi mu je treće mesto. U dosadašnjoj karijeri je osvojio 11 trofeja, uključujući ATP završni turnir sezone 2018. godine i tri turnira iz Masters 1000 serije. U konkurenciji parova je osvojio dva turnira zajedno sa bratom Mišom Zverevim";
opisi[3] = "Grigor Dimitrov (bug. Grigor Dimitrov; Haskovo, 16. maj 1991) bugarski je teniser. Njegov najbolji plasman na ATP listi je treće mesto (novembar 2017) i po tome je najuspešniji u istoriji svoje zemlje. Tokom 2017. je došao do svoje dve najznačajnije titule – mastersa u Sinsinatiju i završnog prvenstva sezone u Londonu. Dimitrov je imao i uspešnu juniorsku karijeru, tokom koje je bio prvi na juniorskoj rang listi, a osvojio je Vimbldon 2008. i Otvoreno prvenstvo SAD 2008.";
opisi[4] = "Borna Ćorić hrvatski je teniser koji je svoj najbolji plasman u singlu dostigao 5. novembra 2018. kada je zauzimao 12. mesto na ATP listi. U dosadašnjoj karijeri je osvojio dva turnira u pojedinačnoj konkurenciji i došao do finala na turniru u Šangaju iz ATP Masters 1000 serije. Sa reprezentacijom Hrvatske je osvojio Dejvis kup 2018. godine. Ćorić je u septembru 2013. osvojio juniorski grend slem turnir US Open u pojedinačnoj konkurenciji. U finalu je slavio protiv Australijanca Tanasija Kokinakisa s 3:6, 6:3 i 6:1 plasiravši se time na prvo mesto svetske liste tenisera juniora.";
opisi[5] = "Marin Čilić (rođen 28. septembra 1988. u Međugorju) je hrvatski teniser koji je svoj najbolji plasman u singlu dostigao 29. januara 2018. kada je zauzimao treće mesto na ATP listi. Najveće uspehe u karijeri je postigao na tvrdoj podlozi: 2014. je trijumfovao na Otvorenom prvenstvu SAD pobedivši u finalu Keja Nišikorija[8] dok je 2016. došao do titule na turniru masters 1000 serije u Sinsinatiju gde je u finalnom meču bio bolji od drugog tenisera sveta Endija Marija.";
opisi[6] = "Viktor Troicki (Beograd, 10. februar 1986) je srpski teniser ruskog porekla. Najveći uspesi u karijeri su mu trijumfi na turnirima u Moskvi 2010. i Sidneju 2015. i 2016. godine. Najbolji plasman na ATP listi ostvario je u junu 2011. kada je bio 12. teniser sveta. Troicki je ostvario odlučujuće pobede za reprezentaciju Srbije u poslednjim mečevima finala Dejvis kupa 2010. i u paru sa Novakom Đokovićem u finalu ATP kupa 2020. godine.";
opisi[7] = "Filip Krajinović je srpski teniser rođen 27. februara 1992. godine u Somboru, Srbija. Najbolji plasman na ATP listi mu je 26. mesto iz aprila 2018. Prvi zapaženiji rezultat imao je u Beogradu, gde je došao do prvog polufinala na ATP turnirima. Na tom turniru je ostvario pobedu nad drugim teniserom sveta, pošto mu je Novak Đoković predao meč. Krajinović je trenutno na 32. mestu na listi najboljih tenisera sveta. U junu 2008. igrao je dva finala na fjučers turnirima u SAD a u avgustu 2009. igrao je i finale čelendžer turnira u španskom San Sebastijanu. Sva tri finala je izgubio ali je na ATP listi dospeo do 293. pozicije, što je najbolji plasman igrača koji nema navršenih 18 godina.";
opisi[8] = "Dušan Lajović (30. jun 1990. Beograd, SFRJ) je srpski teniser. Trenutno se nalazi na 23. mestu na ATP listi. Najveći uspeh u karijeri ostvario je plasmanom u finale Mastersa u Monte Karlu 2019. gde je izgubio od Fabija Fonjinija. Prvi ATP trofej je osvojio 2019. godine na turniru u Umagu, pobedom u finalu protiv Atile Balaža iz Mađarske. Pored toga, vlasnik je 2 ATP trofeja u dubl konkurenciji. Lajović je sa kolegama iz reprezentacije Srbije osvojio ATP kup 2020, pobedom u finalu protiv Španije rezultatom 2:1.";
opisi[9] = "Damir Džumhur (Sarajevo, 20. maj 1992) je teniser iz Bosne i Hercegovine i trenutno najbolje rangirani igrač iz te zemlje na ATP turu. Član je Dejvis kup reprezentacije Bosne i Hercegovine. Damir je bio rangiran kao treći u Juniorskom svjetskom poretku kao i osvajač bronzane medalje na takmičenju olimpijskih igara mladih 2010. godine. Takođe je prvi muški predstavnik Bosne i hercegovine na Grend slem takmičenju. Najbolja pozicija koju je ostvario na ATP listi je 23. mesto od 2. jula 2018. godine.";
opisi[10] = "Andrej Rubljov (rođen 20. oktobar 1997. godine u Moskvi) je ruski teniser. Rubljov je pobedio na Otvorenom prvenstvu Francuske za juniore, porazio je Žuema Munara u finalu.[1] Osvojio je bronzanu medalju u singlu i srebro u dublu na Olimpijskim igrama mladih u Nankingu 2014. godine. Ima pobede nad igračima kao što su Fernando Verdasko, Grigor Dimitrov, David Ferer i David Gofen. Osvojio je titulu u dublu na Kupu Kremlja u Moskvi 2015. godine u paru sa Dmitrijem Tursunovim i titulu u singlu 2017. na Otvorenom prvenstvu Hrvatske u Umagu.";
opisi[11] = "Danilo Petrović (Beograd, 24. januar 1992) je srpski teniser koji je svoj najbolji plasman u singlu zabeležio 9. decembra 2019. kada je bio 169. na ATP listi. Najbolji plasman u dublu ostvario je 28. maja 2018. zauzevši 205. mesto. Na čelendžerima je osvojio je jednu titulu u singlu i dve u dublu. Petrović je 2018. debitovao za reprezentaciju Srbije u plej-ofu Svetske grupe Dejvis kupa protiv Indije. U meču dublova, sa Nikolom Milojevićem, doneo je Srbiji treći presudni bod posle drugog dana dana igre. Pobedili su indijsku kombinaciju Bopana/Mineni.";
opisi[12] = "Peđa Krstin rođen je 03. septembra 1994. u Mokrinu, a prethodnu godinu je završio na 248. mestu ATP liste, što je za 131 poziciju bolji plasman u odnosu na kraj 2013. Do takvog napretka stigao je zahvaljujući pet osvojenih titula na fjučersima.";
 
function sledeci() {
    if(slika >= 13)
        slika = 1;
    else
        slika++;
    document.getElementById("slika").src = "images/ucesnik" + slika + ".png";
    document.getElementById("ucesnik").innerHTML = "<b>" + ucesnici[slika-1] + "</b>";
    document.getElementById("opis").innerHTML = opisi[slika-1];
}
            
function prethodni() {
    if(slika <= 1)
        slika = 13;
    else
        slika--;
    document.getElementById("slika").src = "images/ucesnik" + slika + ".png";
    document.getElementById("ucesnik").innerHTML = "<b>" + ucesnici[slika-1] + "</b>";
    document.getElementById("opis").innerHTML = opisi[slika-1];
}

function ucitaj() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "atp.xml", false);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;
    teniseri = xmlDoc.getElementsByTagName("TENISER");
}

function prikazi() {
    var table = "<table>";
    table += "<tr><th>Rang</th><th>Igrač</th><th>Zemlja</th><th>Godine</th><th>Poeni</th></tr>";
    
    for (i = 0; i < teniseri.length; i++) {
        var rang = teniseri[i].getElementsByTagName("RANKING")[0].childNodes[0].nodeValue;
        var igrac = teniseri[i].getElementsByTagName("PLAYER")[0].childNodes[0].nodeValue;
        var zemlja = teniseri[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
        var godine = teniseri[i].getElementsByTagName("AGE")[0].childNodes[0].nodeValue;
        var poeni = teniseri[i].getElementsByTagName("POINTS")[0].childNodes[0].nodeValue;
        table += `<tr><td>${rang}</td><td>${igrac}</td><td>${zemlja}</td><td>${godine}</td><td>${poeni}</td></tr>`;
    }
    
    table += "</table>";
    document.getElementById("tabela").innerHTML = table;
}

var iznos = 0;
function promeni() {
    var cena = document.getElementById("tribine").value;
    var brojKarata = document.getElementById("brojKarata").value;
    iznos = parseInt(cena) * parseInt(brojKarata);
    if (iznos != 0)
     document.getElementById("ukupanIznos").innerHTML = iznos + " RSD";
    else
        document.getElementById("ukupanIznos").innerHTML = "";
}

function kupi() {
    var datum = document.getElementById("kada").value;
    var cena = document.getElementById("tribine").value;
    var brojKarata = document.getElementById("brojKarata").value;
    
    if (datum.includes("izaberi"))
        alert("Niste izabrali datum");
    
    else if (iznos == 0)
        alert("Niste odabrali željenu ulaznicu");
    
    else
        alert("Kupili ste kartu, njen iznos je " + iznos + " RSD");
}

function ponisti() {
    iznos = 0;
    document.getElementById("kada").checked = true;
    document.getElementById("tribine").checked = true;
    document.getElementById("brojKarata").checked = true;
    document.getElementById("ukupanIznos").innerHTML = "";
}

