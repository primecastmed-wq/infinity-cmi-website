
import React from 'react';

interface LegalPagesProps {
  onBack: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

const LegalPages: React.FC<LegalPagesProps> = ({ onBack, type }) => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20 animate-in fade-in duration-500 text-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-widest mb-12 flex items-center gap-2 hover:opacity-50 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Вернуться на главную
        </button>

        <article className="prose prose-slate max-w-none prose-sm md:prose-base font-light leading-relaxed">
          {type === 'privacy' && (
            <>
              <h1 className="text-4xl font-serif font-bold mb-8">Политика в отношении обработки персональных данных</h1>
              <p>Настоящая политика составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые CMI | Infinity Strategic Systems (далее — Оператор).</p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 uppercase tracking-wider">1. Общие положения</h2>
              <p>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
              <p>1.2. Настоящая политика Оператора в отношении обработки персональных данных применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <strong>cmi-company.ru</strong>.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 uppercase tracking-wider">2. Состав собираемых данных</h2>
              <p>Оператор может обрабатывать следующие персональные данные:</p>
              <ul>
                <li>Фамилия, имя, отчество;</li>
                <li>Номер телефона;</li>
                <li>Адрес электронной почты;</li>
                <li>Никнейм в мессенджере Telegram;</li>
                <li>Название компании и должность.</li>
              </ul>
              <p>Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 uppercase tracking-wider">3. Цели обработки</h2>
              <p>Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте; проведение стратегических консультаций.</p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <h1 className="text-4xl font-serif font-bold mb-8">Использование файлов Cookie</h1>
              <p>Сайт cmi-company.ru использует файлы cookie для обеспечения корректной работы сервисов и улучшения пользовательского опыта.</p>
              <h2 className="text-xl font-bold mt-8 mb-4 uppercase tracking-wider">Что такое cookie?</h2>
              <p>Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайтов. Они помогают нам запомнить ваши предпочтения и анализировать трафик.</p>
              <h2 className="text-xl font-bold mt-8 mb-4 uppercase tracking-wider">Как мы их используем?</h2>
              <p>Мы используем сессионные cookie (удаляются после закрытия браузера) и постоянные cookie (сохраняются до истечения срока действия), чтобы понимать, какие разделы сайта наиболее популярны, и предлагать вам актуальный контент через ИИ-ассистента.</p>
            </>
          )}
        </article>
      </div>
    </div>
  );
};

export default LegalPages;
