
import React from 'react';
import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "restructuring-2024",
    title: "Реструктуризация в условиях турбулентности: глобальный манифест 2024",
    excerpt: "Глубокий анализ того, как сохранить активы и перестроить долговую нагрузку, когда старые финансовые модели терпят крах. Стратегический разбор для топ-менеджмента.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Анатомия кризиса: Почему старые методы не работают</h2>
        <p class="mb-6">В 2024 году мы столкнулись с феноменом «идеального шторма», где геополитическая нестабильность наложилась на беспрецедентный рост стоимости заемного капитала. Большинство компаний совершают одну и ту же фатальную ошибку — они пытаются «пересидеть» шторм, сокращая маркетинговые бюджеты и замораживая найм. Однако стагнация в условиях инфляции 10-15% — это не сохранение, а стремительное вымывание оборотных средств.</p>
        <p class="mb-6">Мы наблюдаем эрозию традиционных рынков сбыта. Компании, которые еще вчера считались лидерами, сегодня оказываются заложниками раздутых штатов и неэффективной логистики. Реструктуризация в нынешних условиях — это не признание поражения, а единственный способ детоксикации бизнеса.</p>
      </section>

      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4 italic">Парадокс долговой нагрузки</h3>
        <p class="mb-6">Многие собственники боятся переговоров с банками, полагая, что это подорвет их репутацию. Реальность обратна: банки больше всего боятся молчания. Профессионально подготовленная стратегия реструктуризации, подкрепленная независимым аудитом от Infinity, превращает вас из «проблемного заемщика» в «партнера по трансформации». Мы помогаем перевести краткосрочные дорогие кредиты в длинные инвестиционные транши с льготным периодом обслуживания.</p>
      </section>

      <div class="bg-slate-900 text-white p-10 mb-12 border-l-8 border-slate-500">
        <h3 class="text-xl font-bold mb-6 uppercase tracking-widest">Протокол Infinity: 5 ступеней выживания</h3>
        <ul class="space-y-6">
          <li class="flex flex-col">
            <span class="font-bold text-lg text-slate-300">01. Тотальная инвентаризация обязательств</span>
            <span class="text-sm text-slate-400">Анализ не только явных долгов, но и скрытых рисков (поручительства, векселя, отложенные налоговые обязательства).</span>
          </li>
          <li class="flex flex-col">
            <span class="font-bold text-lg text-slate-300">02. Формирование «Защищенного периметра»</span>
            <span class="text-sm text-slate-400">Юридическое и физическое обособление ключевых производственных активов от операционных рисков.</span>
          </li>
          <li class="flex flex-col">
            <span class="font-bold text-lg text-slate-300">03. Дисконтирование кредиторской задолженности</span>
            <span class="text-sm text-slate-400">Проведение жестких, но аргументированных переговоров с поставщиками о списании пеней и штрафов в обмен на долгосрочные контракты.</span>
          </li>
          <li class="flex flex-col">
            <span class="font-bold text-lg text-slate-300">04. Оптимизация OPEX через аутсорсинг</span>
            <span class="text-sm text-slate-400">Перевод непрофильных функций (бухгалтерия, IT, логистика) на модель оплаты за результат.</span>
          </li>
          <li class="flex flex-col">
            <span class="font-bold text-lg text-slate-300">05. Рефинансирование через альтернативный капитал</span>
            <span class="text-sm text-slate-400">Привлечение мезонинного финансирования или частных инвестиций для закрытия самых «токсичных» долгов.</span>
          </li>
        </ul>
      </div>

      <section class="my-12">
        <h2 class="text-3xl font-bold text-black mb-6">Взгляд в будущее: Жизнь после трансформации</h2>
        <p class="mb-6">Выход из процесса реструктуризации — это точка входа в новую фазу роста. Компания, прошедшая через «чистку», обладает иммунитетом к рыночным колебаниям. Она становится легче, быстрее и, что самое важное, понятнее для крупных инвесторов и покупателей бизнеса. Мы не просто спасаем вас от кассового разрыва, мы пересобираем ДНК вашей компании для доминирования в посткризисном мире.</p>
      </section>
    `,
    date: "12 Октября, 2024",
    author: "Марк Волков",
    category: "Антикризис",
    readTime: "25 мин",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "investor-pitch-perfection",
    title: "Психология Капитала: Как заставить инвесторов бороться за ваш проект",
    excerpt: "Почему 95% питчей отклоняются в первые 2 минуты? Исследование механизмов принятия решений в венчурных фондах и Family-офисах.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Культ Слайдов vs Магия Смыслов</h2>
        <p class="mb-6">Большинство предпринимателей ошибочно полагают, что успех раунда зависит от красоты дизайна презентации. Это опасное заблуждение. Инвестор, ежедневно просматривающий 50-100 проектов, ищет не картинки, а <strong>архитектуру возврата капитала</strong>. Ваш Pitch Deck — это не рассказ о вашей мечте, это документ, доказывающий неизбежность вашего успеха.</p>
        <p class="mb-6">Мы в Infinity проанализировали более 1000 успешных сделок и выделили ключевой фактор: <i>Narrative Market Fit</i>. Если ваша история не попадает в актуальную повестку инвестора, даже идеальные финансовые показатели не спасут сделку.</p>
      </section>

      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Три вопроса, на которых вы «валитесь»</h3>
        <p class="mb-4">На личной встрече инвестор всегда задаст вопросы, ответов на которые нет в вашей презентации:</p>
        <ul class="list-decimal pl-8 space-y-4 mb-8">
          <li><strong>«Почему вы не сделаете это без моих денег?»</strong> — ответ должен демонстрировать масштаб вашего видения, а не вашу неспособность заработать самостоятельно.</li>
          <li><strong>«Что мешает Google/Amazon/Yandex завтра убить ваш бизнес?»</strong> — здесь проверяется ваша интеллектуальная собственность и сетевые эффекты.</li>
          <li><strong>«Кто ваш идеальный покупатель через 3 года?»</strong> — инвестор хочет знать свой Exit еще до того, как переведет вам деньги.</li>
        </ul>
      </section>

      <div class="bg-slate-50 p-12 border-y-2 border-black mb-12 flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
          <h4 class="text-xl font-bold mb-4 uppercase">Хард-метрики для раунда А</h4>
          <p class="text-sm text-slate-500 mb-4">Инвестор будет вгрызаться в ваши цифры. Вы должны знать их наизусть:</p>
          <ul class="space-y-2 text-sm font-medium">
            <li>• LTV/CAC Ratio > 3.0</li>
            <li>• Churn Rate < 3% (для SaaS)</li>
            <li>• Payback Period < 6 месяцев</li>
            <li>• MoM Growth > 15%</li>
          </ul>
        </div>
        <div class="md:w-1/2 border-l border-slate-200 pl-8">
          <h4 class="text-xl font-bold mb-4 uppercase">Софт-факторы</h4>
          <p class="text-sm text-slate-500 mb-4">То, что читается между строк:</p>
          <ul class="space-y-2 text-sm font-medium">
            <li>• Качество фаундерского состава</li>
            <li>• Скорость принятия решений</li>
            <li>• Способность слышать фидбек (Coachability)</li>
            <li>• Репутация в индустрии</li>
          </ul>
        </div>
      </div>

      <section class="my-12">
        <h2 class="text-3xl font-bold text-black mb-6">Создание FOMO: Искусство дефицита</h2>
        <p class="mb-6">Лучший способ закрыть раунд — сделать так, чтобы инвестор боялся опоздать. Мы обучаем наших клиентов тактике «синхронизированного питчинга», когда все встречи назначаются в течение одной недели. Это создает реальное конкурентное поле. Когда инвестор знает, что параллельно с ним Term Sheet готовит другой фонд, скорость принятия решения возрастает в геометрической прогрессии.</p>
        <p class="mb-6">Infinity выступает вашим «архитектором сделки». Мы не просто упаковываем — мы создаем ажиотаж вокруг вашего капитала, превращая процесс фандрейзинга из унизительного прошения в стратегический выбор партнеров.</p>
      </section>
    `,
    date: "05 Октября, 2024",
    author: "Елена Громова",
    category: "Инвестиции",
    readTime: "22 мин",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "system-vs-chaos",
    title: "Энтропия Управления: Почему ваш бизнес умирает при масштабировании",
    excerpt: "Глубокое погружение в системный инжиниринг. Как перейти от ручного управления к автономной бизнес-системе, способной расти без участия владельца.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Трагедия «Героического Менеджмента»</h2>
        <p class="mb-6">Многие предприниматели гордятся тем, что они работают 24/7 и лично решают любой вопрос в компании. На самом деле, это симптом тяжелой болезни бизнеса. Если успех проекта зависит от героических усилий конкретного человека — это не бизнес, это высокооплачиваемая самозанятость с огромными рисками. Наша задача в Infinity — убить в вас героя и родить архитектора.</p>
        <p class="mb-6">Когда компания вырастает до 20-30 человек, наступает кризис коммуникаций. Информация начинает искажаться, решения принимаются слишком медленно, а контроль над качеством продукта ускользает. Это естественный процесс возрастания энтропии. Без внедрения системного инжиниринга дальнейшее масштабирование приведет лишь к пропорциональному росту проблем и убытков.</p>
      </section>

      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4 italic">Бизнес как алгоритм</h3>
        <p class="mb-6">Представьте ваш бизнес как программный код. Каждый процесс (продажи, производство, найм) — это функция. Если функция написана плохо, программа будет «глючить» или вылетать при увеличении нагрузки. Мы занимаемся рефакторингом вашего «бизнес-кода». Мы создаем структуру, где результат деятельности департамента не зависит от того, с какой ноги встал руководитель отдела.</p>
      </section>

      <div class="bg-black text-white p-12 mb-12 shadow-inner">
        <h3 class="text-2xl font-serif mb-8 text-center border-b border-white/20 pb-4">Матрица Системности Infinity</h3>
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Уровень Процессов</h4>
            <p class="text-sm font-light leading-relaxed">Внедрение сквозных регламентов, где каждый шаг оцифрован. Отсутствие двусмысленности в задачах. Использование BPM-систем для визуализации потоков создания ценности.</p>
          </div>
          <div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Уровень Данных</h4>
            <p class="text-sm font-light leading-relaxed">Переход к Data-Driven подходу. Каждый сотрудник видит свои KPI на дашборде в реальном времени. Система алертов при отклонении показателей от нормы.</p>
          </div>
          <div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Уровень HR</h4>
            <p class="text-sm font-light leading-relaxed">Автоматизация адаптации и обучения. Система грейдов и прозрачных карьерных лестниц. Нанимаем под функции, а не под симпатии.</p>
          </div>
          <div>
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Уровень Смыслов</h4>
            <p class="text-sm font-light leading-relaxed">Единая корпоративная культура и ценности, которые работают как фильтр при найме. Стратегическое планирование как регулярный ритуал.</p>
          </div>
        </div>
      </div>

      <section class="my-12">
        <h2 class="text-3xl font-bold text-black mb-6">Финальная цель: Отчуждаемый актив</h2>
        <p class="mb-6">Зачем нужна вся эта бюрократия и систематизация? Ответ прост: чтобы ваш бизнес стоил дорого. Инвесторы и покупатели (M&A) ненавидят компании, завязанные на личности фаундера. Они покупают «машину по зарабатыванию денег», которая будет работать и без вас. Системность — это единственный способ выйти из операционки, сохранив доход, или продать бизнес за мультипликатор x10 вместо x2.</p>
        <p class="mb-6">Система — это не скучно. Система — это свобода. Свобода для вас как для творца и стратегия для вас как для капиталиста. Мы в Infinity строим именно такие «машины».</p>
      </section>
    `,
    date: "28 Сентября, 2024",
    author: "Игорь Разумов",
    category: "Менеджмент",
    readTime: "18 мин",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
  },
  {
    id: "cashflow-protocol-2025",
    title: "Cashflow без иллюзий: как не попасть в кассовую яму в 2025",
    excerpt: "Разбор, как управлять ликвидностью в нестабильной экономике: недельное планирование, приоритизация платежей, стресс-сценарии и контроль кассового разрыва.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Главная ошибка: путать выручку с деньгами на счете</h2>
        <p class="mb-6">Кассовый разрыв возникает не тогда, когда падает выручка, а тогда, когда компания теряет управляемость графиком платежей. На практике это выглядит так: продажи есть, маржа на бумаге есть, но в нужный день денег на счете нет. Причина обычно в отсутствии дисциплины планирования кэша на горизонте 8-12 недель.</p>
        <p class="mb-6">Операционно сильные компании ведут отдельный контур управления ликвидностью: weekly cash forecast, сценарное планирование и обязательный приоритет критических выплат. Такой подход позволяет заранее увидеть точку риска и перестроить график оплат до того, как проблема станет кризисом.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Как устроить контроль cashflow в реальном бизнесе</h3>
        <p class="mb-6">Шаг 1: разделите все платежи на четыре категории: обязательные, операционные, ростовые и необязательные. Шаг 2: введите правило ежедневного обновления входящих и исходящих оплат. Шаг 3: введите порог тревоги, например остаток менее двух недель фиксированных расходов.</p>
        <p class="mb-6">Важно не просто резать расходы, а удерживать баланс между устойчивостью и ростом. Если вы бездумно выключаете маркетинг и клиентский сервис, то через 1-2 месяца получите второй удар: падение входящего потока и повторный кассовый разрыв.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Протокол 72 часов</h3>
        <ul class="list-disc pl-8 space-y-3 mb-8">
          <li>Соберите план-факт cashflow на 12 недель с детализацией по дням.</li>
          <li>Ограничьте все платежи, не влияющие на выручку и выполнение контрактов.</li>
          <li>Пересогласуйте условия оплаты с крупнейшими поставщиками и подрядчиками.</li>
          <li>Запустите короткий ежедневный cash-standup с владельцем, финансами и операционным блоком.</li>
          <li>Подготовьте стресс-сценарий при падении продаж на 15%, 25% и 35%.</li>
        </ul>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/Cash-Flow-Management" target="_blank">IMF: Cash Flow Management</a></li>
          <li><a href="https://www.ifc.org/en/what-we-do/sme-finance" target="_blank">IFC: SME Finance and Liquidity</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights" target="_blank">McKinsey: Corporate Finance Insights</a></li>
          <li><a href="https://www.oecd.org/finance/" target="_blank">OECD Finance and Enterprise</a></li>
        </ul>
      </section>
    `,
    date: "18 Февраля, 2025",
    author: "Елена Громова",
    category: "Финансы",
    readTime: "19 мин",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "boardroom-decisions-2025",
    title: "Совет директоров без театра: как принимать решения быстрее рынка",
    excerpt: "Как превратить встречи топ-команды в систему исполнения: протокол решений, роли, контроль дедлайнов и единый управленческий ритм.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Почему совещания не работают</h2>
        <p class="mb-6">Большинство управленческих встреч страдает от двух болезней: отсутствие критериев результата и размытая ответственность. В результате обсуждения растягиваются, решения откладываются, а исполнение «теряется» между функциями.</p>
        <p class="mb-6">Если встреча не заканчивается документом с четкими действиями, сроками и владельцами, она не повышает управляемость, а увеличивает управленческий шум. В турбулентной среде это прямой путь к просадке скорости и маржи.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Формула рабочей встречи</h3>
        <p class="mb-6">Каждый вопрос проходит четыре шага: факты, гипотезы, решение, проверка эффекта. В конце фиксируются ответственный, срок и метрика. Следующая встреча начинается с отчета по предыдущим решениям, а не с новых обсуждений.</p>
        <p class="mb-6">Для совета директоров и топ-команды полезно разделить формат на две сессии: стратегическую (раз в месяц) и операционную (раз в неделю). Это снижает перегруз и ускоряет цикл принятия решений.</p>
        <div class="bg-slate-100 p-8 border-l-4 border-black">
          <p class="text-sm font-semibold uppercase tracking-widest mb-3">Минимальный набор метрик</p>
          <p>Выручка, маржа, скорость цикла сделки, конверсия в оплату, отток клиентов, загрузка ключевой команды.</p>
        </div>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://corpgov.law.harvard.edu/" target="_blank">Harvard Law School Forum on Corporate Governance</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights" target="_blank">McKinsey: Organizational Performance</a></li>
          <li><a href="https://hbr.org/topic/subject/decision-making-and-problem-solving" target="_blank">Harvard Business Review: Decision-Making</a></li>
        </ul>
      </section>
    `,
    date: "03 Апреля, 2025",
    author: "Игорь Разумов",
    category: "Менеджмент",
    readTime: "16 мин",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "marketing-cut-losses-2025",
    title: "Маркетинг без слива бюджета: 7 шагов для роста в дорогом трафике",
    excerpt: "Большой практический гайд по антикризисной воронке: от качества трафика до окупаемости каналов и синхронизации маркетинга с продажами.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Дорогой лид еще не проблема</h2>
        <p class="mb-6">Рост стоимости трафика сам по себе не убивает экономику. Убивает отсутствие прозрачности: где заявка теряется, почему лид не доходит до оплаты, на каком этапе падает конверсия. Пока путь клиента не оцифрован по шагам, увеличение бюджета превращается в игру на удачу.</p>
        <p class="mb-6">Правильный подход: считать юнит-экономику по каналам и сегментам, а не усредненно по всей компании. Тогда становится видно, где реклама реально приносит прибыль, а где формирует только «красивые» отчеты.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Что делаем в первую неделю</h3>
        <ul class="list-decimal pl-8 space-y-3 mb-8">
          <li>Чистим нецелевые источники и пересобираем семантику под коммерческие намерения.</li>
          <li>Вводим SLA на первый контакт с лидом и контроль дозвона.</li>
          <li>Делаем отдельные офферы под ключевые сегменты с разной болью и чеком.</li>
          <li>Считаем ROMI и CAC отдельно по каналам, креативам и сегментам.</li>
          <li>Отключаем то, что не окупается, и масштабируем связки с подтвержденной маржой.</li>
          <li>Сверяем маркетинговые обещания и скрипты отдела продаж.</li>
          <li>Вводим недельный цикл гипотез с четкими критериями успеха.</li>
        </ul>
        <p class="mb-6">Через 2-4 недели такой режим обычно дает резкое снижение стоимости квалифицированного лида и рост конверсии в встречу или оплату.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.thinkwithgoogle.com/" target="_blank">Think with Google: Marketing Effectiveness</a></li>
          <li><a href="https://www.meta.com/business/news/" target="_blank">Meta for Business: Performance Insights</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights" target="_blank">McKinsey: Growth, Marketing and Sales</a></li>
        </ul>
      </section>
    `,
    date: "27 Июня, 2025",
    author: "Марк Волков",
    category: "Маркетинг",
    readTime: "18 мин",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
  },
  {
    id: "team-reset-2025",
    title: "Команда после роста: как убрать хаос ролей и вернуть скорость",
    excerpt: "Как перезапустить орг-модель после быстрого роста: роли, контуры ответственности, контроль загрузки и снижение управленческих потерь.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Симптомы управленческого перегрева</h2>
        <p class="mb-6">Когда компания быстро растет, структура почти всегда отстает от масштаба. На уровне операционки это выражается в пересечении функций, размытых зонах ответственности и хронических «пересогласованиях». Внешне команда занята, но скорость выполнения задач падает.</p>
        <p class="mb-6">Ключевой риск: рост фонда оплаты труда без пропорционального роста производительности. Если не остановить этот тренд, бизнес теряет маржу и становится зависимым от постоянных ручных вмешательств собственника.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Рестарт орг-структуры за 30 дней</h3>
        <p class="mb-6">Шаг 1: формализуйте ключевые функции и назначьте owner по каждой. Шаг 2: зафиксируйте ожидаемый результат и KPI по роли. Шаг 3: уберите задачи, не влияющие на выручку, маржу и клиентский результат. Шаг 4: введите недельный цикл управленческой синхронизации.</p>
        <p class="mb-6">Цель не в усилении контроля ради контроля. Цель в том, чтобы каждое направление понимало свою зону решений и не создавало операционные пробки для других функций.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://hbr.org/topic/subject/organizational-design" target="_blank">Harvard Business Review: Organizational Design</a></li>
          <li><a href="https://www.gallup.com/workplace/" target="_blank">Gallup Workplace Research</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights" target="_blank">McKinsey: Organization and Talent</a></li>
        </ul>
      </section>
    `,
    date: "19 Сентября, 2025",
    author: "Игорь Разумов",
    category: "Команда",
    readTime: "15 мин",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "owner-dashboard-2025",
    title: "Панель собственника: 12 метрик, которые реально управляют бизнесом",
    excerpt: "Системный подход к управленческой аналитике: что показывать собственнику каждый день, каждую неделю и каждый месяц.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Не все метрики одинаково полезны</h2>
        <p class="mb-6">У большинства компаний много отчетов, но мало управляемости. Собственник видит цифры постфактум и реагирует слишком поздно. Рабочий дашборд должен быть компактным, но жестким: деньги, прибыль, воронка, удержание и операционная дисциплина.</p>
        <p class="mb-6">Ключевой принцип: разделить метрики по частоте принятия решений. Ежедневные показатели отвечают за стабильность, недельные — за результат функций, месячные — за стратегический курс.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Ядро дашборда</h3>
        <ul class="list-disc pl-8 space-y-3 mb-8">
          <li>Денежный остаток, план-факт на 8-12 недель, burn rate.</li>
          <li>Выручка, валовая и операционная маржа по продуктам.</li>
          <li>CAC, LTV, ROMI по каналам и сегментам.</li>
          <li>Конверсия по этапам воронки и скорость цикла сделки.</li>
          <li>Повторные продажи, churn и доля активной клиентской базы.</li>
          <li>Производительность команды и выполнение SLA в ключевых процессах.</li>
        </ul>
        <p class="mb-6">Если эти метрики обновляются в едином контуре и привязаны к владельцам функций, управленческие решения становятся быстрее и точнее.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.bain.com/insights/topics/performance-improvement/" target="_blank">Bain: Performance Improvement</a></li>
          <li><a href="https://www2.deloitte.com/global/en/pages/consulting/topics/finance-transformation.html" target="_blank">Deloitte: Finance Transformation</a></li>
          <li><a href="https://www.gartner.com/en/topics/business-intelligence" target="_blank">Gartner: Business Intelligence</a></li>
        </ul>
      </section>
    `,
    date: "11 Декабря, 2025",
    author: "Елена Громова",
    category: "Аналитика",
    readTime: "17 мин",
    imageUrl: "https://images.unsplash.com/photo-1551281044-8b6eeb65be0f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "anti-crisis-2026-q1",
    title: "Антикризис 2026: что делать в первые 14 дней, если прибыль просела",
    excerpt: "Сценарий первых двух недель при просадке прибыли: диагностика, антикризисные решения, контроль эффекта и возврат управляемости.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Сначала стабилизация, потом развитие</h2>
        <p class="mb-6">Падение прибыли часто провоцирует хаотичные действия: массовые сокращения, заморозка всех расходов и одновременный запуск десятков инициатив. На практике это ухудшает ситуацию. Правильный порядок другой: сначала стабилизация денежного контура, потом прицельные изменения модели.</p>
        <p class="mb-6">В первые 14 дней не нужно «перестраивать весь бизнес». Нужно определить, где компания теряет деньги прямо сейчас, и быстро закрыть эти точки.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Первые 14 дней</h3>
        <ul class="list-decimal pl-8 space-y-3 mb-8">
          <li>Зафиксировать юнит-экономику по продуктам и каналам.</li>
          <li>Остановить активности с отрицательной маржой или неясной окупаемостью.</li>
          <li>Защитить каналы продаж с подтвержденным возвратом инвестиций.</li>
          <li>Пересобрать коммерческие предложения для маржинальных сегментов.</li>
          <li>Запустить недельный цикл контроля: решение, метрика, проверка результата.</li>
        </ul>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.imf.org/en/Publications/WEO" target="_blank">IMF World Economic Outlook</a></li>
          <li><a href="https://www.worldbank.org/en/publication/global-economic-prospects" target="_blank">World Bank: Global Economic Prospects</a></li>
          <li><a href="https://www.weforum.org/agenda/archive/economy/" target="_blank">World Economic Forum: Economy</a></li>
        </ul>
      </section>
    `,
    date: "22 Января, 2026",
    author: "Марк Волков",
    category: "Антикризис",
    readTime: "16 мин",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "pricing-reset-2026",
    title: "Цена без самообмана: как пересобрать прайс и не потерять клиентов",
    excerpt: "Подробная модель ценообразования: сегменты, пакеты ценности, тестирование гипотез и защита маржи без потери спроса.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Низкая цена не спасает слабую модель</h2>
        <p class="mb-6">Многие компании пытаются конкурировать скидками, хотя их основная проблема не в цене, а в неупакованной ценности. В таком режиме выручка может расти, но прибыль сгорает в себестоимости, скидках и операционных потерях.</p>
        <p class="mb-6">Правильный путь: строить цену от ценности для конкретного сегмента и от целевой маржи, а не от «средней по рынку». Это требует аналитики, но дает предсказуемый финансовый эффект.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Практика пересборки</h3>
        <p class="mb-6">Шаг 1: выделите сегменты клиентов по чувствительности к цене и ожидаемой ценности. Шаг 2: сформируйте пакеты предложения (базовый, целевой, расширенный) с четким результатом для клиента. Шаг 3: протестируйте несколько ценовых гипотез на ограниченной выборке и измерьте влияние на конверсию, средний чек и валовую маржу.</p>
        <p class="mb-6">Ключевая ошибка — менять цену без подготовки отдела продаж. Если команда не умеет объяснять ценность, клиент воспринимает повышение как «подорожало просто так».</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.bcg.com/publications/collections/pricing" target="_blank">BCG: Pricing Strategy</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights" target="_blank">McKinsey: Pricing and Revenue Growth</a></li>
          <li><a href="https://hbr.org/topic/subject/pricing" target="_blank">Harvard Business Review: Pricing</a></li>
        </ul>
      </section>
    `,
    date: "14 Марта, 2026",
    author: "Елена Громова",
    category: "Продажи",
    readTime: "15 мин",
    imageUrl: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "b2b-funnel-2026",
    title: "B2B-воронка 2026: как сократить цикл сделки и не терять теплых лидов",
    excerpt: "Детальный разбор B2B-процесса: скорость ответа, квалификация, коммерческое предложение и контроль конверсии до оплаты.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Длинный цикл сделки съедает прибыль</h2>
        <p class="mb-6">Если цикл сделки в B2B растянут, компания теряет не только выручку, но и предсказуемость. Лиды «висят» в CRM, команда занята, а оплаты не приходят вовремя. В итоге CAC растет, а план продаж выполняется за счет перегруза менеджеров.</p>
        <p class="mb-6">Обычно причина в трех местах: медленная первичная реакция, слабая квалификация клиента и затянутый этап коммерческого предложения.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Три рычага ускорения</h3>
        <ul class="list-disc pl-8 space-y-3 mb-8">
          <li>Жесткий SLA первого контакта и стандарты квалификации.</li>
          <li>Шаблоны КП под типовые сценарии клиента с экономическим обоснованием.</li>
          <li>Единый владелец сделки от первого касания до оплаты.</li>
          <li>Контроль «узких мест» в CRM по каждому этапу воронки.</li>
        </ul>
        <p class="mb-6">Даже базовая дисциплина на этих этапах обычно сокращает цикл сделки, повышает конверсию в оплату и разгружает команду продаж.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.gartner.com/en/sales" target="_blank">Gartner: B2B Sales</a></li>
          <li><a href="https://www.forrester.com/bold/" target="_blank">Forrester B2B Marketing and Sales Research</a></li>
          <li><a href="https://www.hubspot.com/state-of-sales" target="_blank">HubSpot State of Sales</a></li>
        </ul>
      </section>
    `,
    date: "30 Мая, 2026",
    author: "Игорь Разумов",
    category: "Продажи",
    readTime: "14 мин",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "ops-automation-2026",
    title: "Автоматизация без хаоса: какие процессы отдавать AI в 2026",
    excerpt: "Где AI и автоматизация реально улучшают экономику, а где повышают сложность без результата. Практический framework приоритизации.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">AI нужен не везде</h2>
        <p class="mb-6">В 2026 году автоматизация стала массовой, но это не означает, что любой процесс нужно сразу отдавать алгоритмам. Если исходный процесс хаотичен, автоматизация ускоряет хаос и масштабирует ошибки.</p>
        <p class="mb-6">Правильная логика: сначала стандартизировать процесс и ввести метрики качества, затем автоматизировать повторяемые участки с четким ROI.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Приоритетные зоны</h3>
        <ul class="list-decimal pl-8 space-y-3 mb-8">
          <li>Первичная квалификация входящих лидов и маршрутизация заявок.</li>
          <li>Сбор и обновление регулярной отчетности по KPI.</li>
          <li>Контроль SLA, алерты отклонений и эскалации.</li>
          <li>База знаний для продаж, сервиса и внутренних операций.</li>
          <li>Поддержка принятия решений на основе оперативных данных.</li>
        </ul>
        <p class="mb-6">Перед внедрением каждого кейса фиксируйте текущие показатели: время выполнения, стоимость процесса, долю ошибок. После внедрения сравнивайте эффект на горизонте 4-8 недель.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.gartner.com/en/topics/artificial-intelligence" target="_blank">Gartner: Artificial Intelligence</a></li>
          <li><a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights" target="_blank">McKinsey QuantumBlack Insights</a></li>
          <li><a href="https://www.weforum.org/reports/" target="_blank">World Economic Forum Reports</a></li>
        </ul>
      </section>
    `,
    date: "16 Августа, 2026",
    author: "Марк Волков",
    category: "Операции",
    readTime: "16 мин",
    imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "capital-strategy-2026",
    title: "Капитал на рост в 2026: кредит, инвестор или партнерство",
    excerpt: "Подробный разбор инструментов финансирования: банковский долг, equity, стратегический партнер и гибридные модели.",
    content: `
      <section>
        <h2 class="text-3xl font-bold text-black mb-6">Неправильные деньги опаснее отсутствия денег</h2>
        <p class="mb-6">Выбор капитала напрямую влияет на свободу управления компанией. Дорогой долг с жестким графиком может «съесть» операционную гибкость, а инвестор с другой стратегией горизонта способен затормозить ключевые решения. Партнерство без четкой структуры часто приводит к конфликтам по ролям и контролю.</p>
        <p class="mb-6">Поэтому выбирать источник финансирования нужно не по доступности «здесь и сейчас», а по совместимости с вашей моделью роста, циклом окупаемости и уровнем управленческого риска.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Решение через структуру</h3>
        <p class="mb-6">Практический порядок: сначала строится сценарий возврата капитала в базовом, стрессовом и агрессивном сценариях. Далее определяется допустимая долговая нагрузка и требования к ковенантам. И только после этого выбирается инструмент: кредит, equity, конвертируемый займ или стратегический альянс.</p>
        <p class="mb-6">Такой подход защищает бизнес от «красивых» предложений с токсичными условиями и позволяет заранее оценить, сколько управленческой свободы вы сохраняете после сделки.</p>
      </section>
      <section class="my-12">
        <h3 class="text-2xl font-bold text-black mb-4">Источники</h3>
        <ul class="list-disc pl-8 space-y-2 mb-8">
          <li><a href="https://www.oecd.org/corporate/" target="_blank">OECD Corporate Governance</a></li>
          <li><a href="https://www.ifc.org/en/insights-reports" target="_blank">IFC Insights and Reports</a></li>
          <li><a href="https://www.worldbank.org/en/topic/financialsector" target="_blank">World Bank: Financial Sector</a></li>
          <li><a href="https://www.bis.org/topics/corporatefinance.htm" target="_blank">Bank for International Settlements: Corporate Finance</a></li>
        </ul>
      </section>
    `,
    date: "07 Ноября, 2026",
    author: "Елена Громова",
    category: "Инвестиции",
    readTime: "20 мин",
    imageUrl: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=2070"
  }
];

interface BlogProps {
  onPostClick: (id: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Expert Insights</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-8">
            База знаний <br /> <span className="italic text-slate-500 text-4xl md:text-6xl">для лидеров рынка</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Практические рекомендации от наших ведущих стратегов по выходу из кризиса, привлечению капитала и масштабированию системных компаний. Мы не пишем новости — мы формируем стратегический контекст.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-8 bg-slate-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{post.readTime} чтец</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 group/link">
                <span className="text-[10px] font-bold uppercase tracking-widest group-hover/link:translate-x-1 transition-transform">Изучить стратегию</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
