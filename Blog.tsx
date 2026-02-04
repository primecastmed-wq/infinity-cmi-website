
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
