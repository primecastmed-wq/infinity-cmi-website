
import React from 'react';
import { BLOG_POSTS } from './Blog';

interface BlogPostDetailProps {
  postId: string;
  onBack: () => void;
  onConsultClick: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ postId, onBack, onConsultClick }) => {
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) return <div className="pt-40 p-8">Статья не найдена</div>;

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-slate-400 hover:text-black transition-colors mb-16 uppercase text-[10px] font-bold tracking-widest"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Назад к списку статей
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
              <span className="text-black border-b border-black pb-1">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime} чтец</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 border-l-2 border-black pl-6 py-2">
              <div className="text-xs font-bold uppercase tracking-widest">Автор: {post.author}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Expert Consultant at Infinity</div>
            </div>
          </div>

          <div className="aspect-[21/9] mb-16 bg-slate-100 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-xl prose-slate max-w-none font-light leading-relaxed mb-20">
            <p className="text-2xl font-serif mb-12 italic text-slate-600">
              {post.excerpt}
            </p>
            
            {/* Dynamic Content Injection */}
            <div 
              className="blog-content-container"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Expert CTA Box */}
          <div className="bg-black text-white p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                Готовы перевести теорию в практику?
              </h3>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl font-light">
                Эти рекомендации — лишь фундамент. Каждая ситуация в бизнесе уникальна и требует индивидуальной архитектуры решения. Наши партнеры готовы провести аудит вашего кейса.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={onConsultClick}
                  className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
                >
                  Записаться на разбор
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <div className="flex items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Конфиденциальность гарантирована (NDA)
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 translate-y-1/2 translate-x-1/2 rotate-45 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
