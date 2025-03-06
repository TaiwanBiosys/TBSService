import React from 'react';
import { Users } from 'lucide-react';

function Company() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-gradient-to-b from-green-900/90 to-amber-900/90 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">公司介紹</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">服務內容</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  沼氣發電系統規劃
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  設備安裝與維護
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  技術諮詢服務
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">組織規劃</h3>
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <p>專業團隊配置</p>
              </div>
              <p>我們擁有經驗豐富的工程師團隊，專注於沼氣發電技術的研發與應用。</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">創辦人介紹</h3>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-center">擁有20年能源產業經驗，致力於推動台灣永續能源發展。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;