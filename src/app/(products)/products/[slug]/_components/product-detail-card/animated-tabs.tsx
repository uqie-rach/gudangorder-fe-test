import { useState, useRef, useEffect } from "react"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

export function AnimatedTabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    // Update the indicator position when the active tab changes
    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab)
    const activeTabElement = tabRefs.current[activeTabIndex]

    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      })
    }
  }, [activeTab, tabs])

  return (
    <div className="mt-12">
      <div className="relative border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`py-4 text-lg font-medium transition-colors duration-300 ${activeTab === tab.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Animated indicator */}
        <div
          className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
          style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
        />
      </div>
      <div className="py-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-300 ${activeTab === tab.id ? "block opacity-100" : "hidden opacity-0"
              }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
