import React from 'react';
import { Factory, Lightbulb } from 'lucide-react';

function Industry() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4 bg-white/90">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">台灣沼氣發電產業介紹</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1593476087123-5367c143d047?auto=format&fit=crop&q=80"
                alt="Biogas Plant"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Factory className="w-8 h-8 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">產業現況</h3>
                  <p className="text-gray-700">台灣每年產生大量有機廢棄物，具有龐大的沼氣發電潛力。目前已有多處沼氣發電設施，但仍有很大的發展空間。根據環保署統計，台灣每年產生約780萬噸的有機廢棄物，其中包含農業廢棄物、畜牧業廢水及廚餘等，這些都是優質的沼氣發電原料。</p>
                  <p className="text-gray-700 mt-2">現有的沼氣發電設施主要分布在畜牧場、污水處理廠和垃圾掩埋場，總裝置容量約為30MW，但這僅佔整體潛力的15%左右。透過更完善的收集系統和處理技術，我們可以大幅提升沼氣發電的效能。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">發展機會</h3>
                  <p className="text-gray-700">隨著環保意識提升及政府政策支持，沼氣發電產業正迎來重要發展契機。政府已將沼氣發電納入再生能源發展條例，提供固定的躉購費率，加上碳權交易機制的建立，為產業發展創造有利條件。</p>
                  <p className="text-gray-700 mt-2">此外，沼氣發電不僅能處理廢棄物，還能創造綠色能源，是實現循環經濟的最佳示範。預估到2025年，台灣沼氣發電的裝置容量可望達到100MW，年減碳量相當於種植900萬棵樹。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industry;