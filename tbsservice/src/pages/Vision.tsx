import React from 'react';
import { Target } from 'lucide-react';

function Vision() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-white/95">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">公司願景</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                alt="Sustainable Future"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">永續發展</h3>
                  <p className="text-gray-700">我們致力於推動沼氣發電產業發展，不僅創造綠色能源，更為社會帶來正面影響。沼氣發電是一項具有多重效益的綠色科技，它不僅能解決廢棄物處理問題，還能產生再生能源，同時創造就業機會。</p>
                  <p className="text-gray-700 mt-3">我們相信，沼氣發電不僅是一項能源技術，更是連結農業、環保和能源的重要橋樑。通過沼氣發電，我們可以：</p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      協助農畜牧業處理廢棄物，改善環境衛生
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      生產綠色電力，減少化石燃料依賴
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      產生優質有機肥料，支持有機農業發展
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <h4 className="text-lg font-semibold text-green-800">我們的使命</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    推動循環經濟：將廢棄物轉化為寶貴資源，創造經濟價值
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    減少碳排放：每年預計可減少10萬噸二氧化碳排放
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    創造在地就業機會：預計五年內創造超過500個綠色就業機會
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  展望未來，我們將持續投入技術創新，擴大沼氣發電的應用範圍，為台灣的永續發展貢獻一份心力。我們期待與更多志同道合的夥伴合作，共同打造更美好的綠能未來。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;