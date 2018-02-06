---
title: My Third Post
date: '2018-01-27 12:00am'
description: >-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit
  turpis cursus in. Quis eleifend quam adipiscing vitae proin.
image: /static/uploads/my-first-post.jpg
---
În cadrul conferinței** I/O 2017**, la partea de web design, s-a pus foarte mult accentul pe User Experience.

Să enumerăm principalele aspecte de care trebuie să țină cont web designerii. Site-ul trebuie să fie:

## **1.Reactiv**

Creatorii unui site vor ține cont de timpul de încărcare a site-ului și de reprezentarea acestuia, prin elemente specifice — Loading bar.
Un site reactiv trebuie să și aibă fonturi optimizate și imagini svg.
Se vor utiliza elementele de distragere a atenției, atunci când se incarcă pagina principală. Conținutul din site se va încărca astfel încât, să nu existe disconfort vizual generat de tranziția bruscă dintre pagini.
Câteva unelte pentru site-uri reactive:

* Extensia **Lighthouse** - oferă un raport complet al paginii și este o extensie Chrome(deja implementată în Dev tools).
* Page Speed Insights, de asemenea unealtă Google.
* **Webpagetest**, unealtă non **Google** dar cu care puteți afla cum experimentează utilizatorii site-ul creat de voi.

O aplicație web progresivă trebuie să fie PRPL (Purple Pattern - concept introdus din 2016)
P — push (preluarea fișierelor importante de pe server pentru pagina solicitată)
Render — afișarea rapidă a paginii solicitate
Pre-che — Browser-ul să încarce paginile rămase în cache.
Lazy-load — Încărcarea la cerere a resurselor necesare pentru restul paginilor.
```html
<div id="post">
    <img :src="post.image"/>
    <h1 class="display-4">{{ post.title }}</h1>

    <div class="blur" ></div>
		<div class="article " v-html="post.body" />
</div>
```
## **2.Predictibil**

Folosirea meniului **Polymer**, optând pentru **Swipe** și gesturi ușor de înțeles. La **Polymer** a fost scos Blue flash. Acesta era o „rămășită” de la începuturile web-ului care a fost creată pentru a oferi feed-back la apăsarea link-urilor.

## **3. Control**

Utilizatorul va avea control asupra site-ului accesat. Imaginile, butoanele site-ului nu se vor mai decala până la încărcarea totală a paginii web. În acest sens, nu vor mai fi neplăceri în a apăsa din greșeală pe alte butoane decât cele dorite. Apariția aplicațiilor web progresive, au putut readuce controlul utilizatorului asupra site-ului pe care-l accesează.

Push-notification — utilizarea acestui element trebuie să se limiteze la magazinele online, site-uri de știri, jurnale. Respectând această limită, utilizatorul va avea control asupra conținutului primit. Odată acceptate notificările, acesta va ști la ce informații să se aștepte.

Câteva dintre dezavantajele absenței Progressive Web App:

Intervalul mare de încărcare între pagini din interiorul unui site.
Întârzierea animațiilor sau a apariției butoanelor, imaginilor în cazul telefoanelor low-end.
Scroll infinit — La aceste liste de scroll infinit, atunci când vor fi foarte multe elemente(sute de mii), acestea vor rămâne încărcate în memoria browserului. Ca urmare, browserul se va mișca lent, „furând” din memoria RAM. Unica soluție este utilizarea listelor virtualizate. Obiectele din aceste liste, se încarcă pe măsură ce se dă scroll. Cele anterioare, se vor șterge din cache-ul browserului, pentru a se înlesni navigarea.
Aici găsiți mai multe informații despre Progressive Web App.
