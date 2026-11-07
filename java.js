document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);

  // t=text, e=email, p=tel, a=textarea (full width), r=radio
  const logo = `<div class="logo"><svg viewBox="0 0 64 48" aria-hidden="true"><path d="M32 4 6 15l26 11 26-11z" fill="currentColor"/><path d="M16 22v9c4 5 28 5 32 0v-9l-16 7z" fill="currentColor"/><path d="M58 15v14" stroke="currentColor" stroke-width="2"/></svg>AMIN ACADEMY<br>امین آکادمی</div>`;
  const R = (n, l, o, col) => ({ k: 'r', n, l, o, col });
  const T = (n, l, k = 't') => ({ k, n, l });
  const A = (n, l) => ({ k: 'a', n, l });
  const ynm = ['بله', 'نه', 'گاهی اوقات'];

  const pages = [
    { title: 'فرم درخواست پارتنر آینده', lead: 'این یک فرم درخواست رسمی پارتنر آینده است.', photo: true, secs: [
      ['اطلاعات پایه', [
        T('first', 'نام'), T('first2', 'نام اول'), T('last', 'نام خانوادگی'), T('email', 'ایمیل', 'e'),
        T('phone', 'شماره تلفن', 'p'), T('sign', 'امضای ستاره شناس'),
        R('home', 'کجا زندگی می‌کنی؟', ['با والدینم', 'با هم‌اتاقی(های)م', 'در خانه خودم', 'در خانه شخص دیگری'], true),
        T('height', 'قد'), T('age', 'سن'), T('eye', 'رنگ چشم'), T('hair', 'رنگ مو')]],
      ['تحصیلات و شغل', [
        T('edu', 'بالاترین سطح تحصیلات شما چیست؟'), T('major', 'چه رشته‌ای تحصیل کردید؟'),
        T('school', 'کجا تحصیل کردید؟'), T('employed', 'آیا شاغل هستید؟'),
        T('salary', 'چقدر حقوق می‌گیرید؟'), T('job', 'مشغول به چه کاری هستید؟')]],
      ['آشنایی با شما', [
        T('hascar', 'آیا ماشین دارید؟'), T('drives', 'آیا رانندگی می‌کنید؟'),
        T('religion', 'چه نوع دینی دارید؟'), T('cartype', 'چه نوع ماشینی رانندگی می‌کنید؟'),
        R('drugs', 'آیا مواد مخدر مصرف می‌کنید؟', ynm), R('smoke', 'آیا سیگار می‌کشید؟', ynm),
        T('bestfood', 'بهترین غذایی که می‌پزید چیست؟'),
        R('toilet', 'آیا باید صندلی توالت را به سمت چپ قرار دهید؟', ['بالا', 'پایین', 'فرقی نمی‌کند']),
        T('band', 'گروه موسیقی مورد علاقه:'), T('movie', 'فیلم مورد علاقه:')]]
    ] },
    { title: 'فرم درخواست پارتنر آینده', secs: [
      ['سبک زندگی و عادت‌ها', [
        T('hobbies', 'علاقه‌هات چیه؟'), T('workhours', 'چقدر ساعات کاری می‌کنی؟'),
        T('spend', 'چی رو دوست داری خرج کنی؟'), T('sports', 'چه ورزش‌هایی انجام میدی؟'),
        R('diet', 'چطور رژیم غذایی خودت رو توصیف می‌کنی؟', ['خیلی سالم', 'بیشتر سالم', 'متوسط', 'اصلاً سالم نیست'], true),
        A('free', 'چطور می‌خوای زمان آزادت رو بگذرونی؟'),
        R('travel', 'معمولاً در سفرها می‌ری؟', ['بله', 'نه']), T('place', 'کجا رو بیشتر دوست داری؟'),
        R('alcohol', 'مصرف الکل؟', ynm),
        R('pet', 'آیا دوست داری حیوان خانگی داشته باشی؟', ['بله', 'نه', 'شاید']),
        T('petyes', 'اگه بله، چه حیوانی؟'), T('petno', 'اگه نه، چرا؟'),
        A('party', 'چقدر اهل تفریح و مهمونی هستی؟'), A('leisure', 'چطور اوقات فراغتت رو می‌گذرونی؟')]],
      ['شخصیت و ارزش‌ها', [
        A('interests', 'به چه چیزهایی بیشتر علاقه داری؟'), A('friends', 'چطور دوستات تو رو توصیف می‌کنن؟'),
        R('faith', 'تا چه حد به مذهب/باورهای مذهبی اهمیت میدی؟', ['خیلی زیاد', 'زیاد', 'متوسط', 'کم']),
        A('relation', 'به دنبال چه نوع رابطه‌ای هستی؟'),
        T('kind', 'مهربانی برات چقدر مهمه؟'), T('patience', 'صبر برات چقدر مهمه؟'),
        T('family1', 'توجه به خانواده/ چقدر مهمه؟'), T('family2', 'توجه به خانواده چقدر مهمه؟'),
        A('goals', 'اهدافت در زندگی چیه؟')]],
      ['سؤالات نهایی', [
        A('tell', 'آیا چیز خاصی هست که دوست داری بهم بگی؟'),
        A('why', 'چرا فکر می‌کنی پارتر خوبی می‌تونی باشی؟'),
        A('diff', 'چه چیزی تو رو از سایر متقاضی‌ها متفاوت می‌کنه؟')]]
    ], confirm: true }
  ];

  const esc = s => s.replace(/"/g, '&quot;');

  function field(f) {
    if (f.k === 'r') {
      return `<div class="f${f.col ? ' full' : ''}"><span class="q">${f.l}</span><div class="opts${f.col ? ' col' : ''}">${
        f.o.map(o => `<label><input type="radio" name="${f.n}" value="${esc(o)}">${o}</label>`).join('')
      }</div></div>`;
    }
    if (f.k === 'a') {
      return `<div class="f full"><label for="${f.n}">${f.l}</label><textarea id="${f.n}" name="${f.n}" rows="3"></textarea></div>`;
    }
    const type = { t: 'text', e: 'email', p: 'tel' }[f.k];
    const extra = f.k === 'e' ? ' dir="ltr"' : f.k === 'p' ? ' dir="ltr" inputmode="tel"' : '';
    return `<div class="f"><label for="${f.n}">${f.l}</label><input type="${type}" id="${f.n}" name="${f.n}"${extra}><span class="msg"></span></div>`;
  }

  // build pages
  pages.forEach((pg, i) => {
    let h = `<header><h1>${pg.title}</h1>${logo}</header>`;
    if (pg.lead) h += `<p class="lead">${pg.lead}</p>`;
    if (pg.photo) {
      h += `<div class="photo"><p>عکس درخواست شده باید شامل یک عکس باشد که برای این موقعیت در نظر گرفته شده است. این عکس باید اخیراً گرفته شده باشد (یعنی در ۶ ماه گذشته).</p><label class="drop" id="drop"><input type="file" accept="image/*" name="photo" aria-label="بارگذاری عکس"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 3 7.2 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg></label></div>`;
    }
    pg.secs.forEach(([t, fs]) => {
      h += `<h2><span>${t}</span></h2><div class="grid">${fs.map(field).join('')}</div>`;
    });
    if (pg.confirm) {
      h += `<div class="confirm"><p>من تأیید می‌کنم که تمام اطلاعات ارائه شده در این درخواست صادقانه و صادقانه است و بهترین دانش و توانایی‌های خود را به اشتراک گذاشته‌ام.</p><div class="grid"><div class="f"><label for="signature">امضا:</label><input type="text" id="signature" name="signature"><span class="msg"></span></div><div class="f"><label for="date">تاریخ:</label><input type="date" id="date" name="date"></div></div></div>`;
    }
    $('p' + i).innerHTML = h;
  });

  // page switching
  const tabs = [...document.querySelectorAll('.bar button')];
  function show(n) {
    [0, 1].forEach(i => { $('p' + i).hidden = i !== n; });
    tabs.forEach((b, i) => b.setAttribute('aria-selected', String(i === n)));
    $('prev').disabled = n === 0;
    $('next').disabled = n === 1;
    window.scrollTo({ top: 0 });
  }
  tabs.forEach((b, i) => { b.onclick = () => show(i); });
  $('prev').onclick = () => show(0);
  $('next').onclick = () => show(1);
  $('print').onclick = () => window.print();
  show(0);

  // photo preview
  const photoInput = document.querySelector('#drop input');
  photoInput.addEventListener('change', e => {
    const file = e.target.files[0];
    const box = $('drop');
    const old = box.querySelector('img');
    if (old) old.remove();
    if (!file || !file.type.startsWith('image/')) return;
    const img = new Image();
    img.alt = 'عکس انتخاب‌شده';
    img.src = URL.createObjectURL(file);
    box.appendChild(img);
  });

  // validation + submit
  const required = [
    ['first', 'نام را وارد کنید'],
    ['last', 'نام خانوادگی را وارد کنید'],
    ['email', 'ایمیل معتبر وارد کنید'],
    ['phone', 'شماره تلفن را وارد کنید'],
    ['signature', 'امضا لازم است']
  ];

  $('submit').onclick = () => {
    const fm = $('form');
    document.querySelectorAll('.f.bad').forEach(x => x.classList.remove('bad'));
    let firstBad = null;
    required.forEach(([n, m]) => {
      const el = fm.elements[n];
      const v = el.value.trim();
      let ok = !!v;
      if (n === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (!ok) {
        const f = el.closest('.f');
        f.classList.add('bad');
        f.querySelector('.msg').textContent = m;
        if (!firstBad) firstBad = el;
      }
    });
    if (firstBad) {
      show(firstBad.closest('section').id === 'p0' ? 0 : 1);
      firstBad.focus();
      return;
    }
    const data = {};
    new FormData(fm).forEach((v, k) => { data[k] = v instanceof File ? (v.name || '') : v; });
    $('out').textContent = JSON.stringify(data, null, 2);
    $('dlg').showModal();
  };

  $('close').onclick = () => $('dlg').close();
});