import { useUserStore } from "@/store/use-user"
import { Lock } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  needAuth?: boolean
}

export function AnimatedTabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const { isAuthenticated } = useUserStore();

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

  function handleSetActiveTab(tab: Tab) {
    if (tab.needAuth && isAuthenticated || !tab.needAuth) {
      setActiveTab(tab.id)
    } else {
      toast.error("Daftar untuk mendapat akses penuh", { richColors: true })
    }
  }


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
              onClick={() => handleSetActiveTab(tab)}
            >
              {tab.needAuth && !isAuthenticated ? (
                <div className="text-lg font-medium">
                  <Lock className="inline mr-1" /> <span>{tab.label}</span>
                </div>
              ) : (
                <span className="text-lg font-medium">{tab.label}</span>
              )}
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
