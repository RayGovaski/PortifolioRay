import { useState } from 'react';
import { FolderOpen, Award, Code } from 'lucide-react';
import './TabButton.css';

const TabButton = ({ 
  tabs = ['Projetos', 'Certificados', 'Stacks'], 
  onTabChange, 
  defaultTab = 0,
  theme = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const getIcon = (index, tabName) => {
    const iconMap = {
      0: <FolderOpen size={20} />,
      1: <Award size={20} />,      
      2: <Code size={20} />        
    };
    
    if (iconMap[index]) return iconMap[index];
    
    if (tabName.toLowerCase().includes('projeto')) return <FolderOpen size={20} />;
    if (tabName.toLowerCase().includes('certificado')) return <Award size={20} />;
    if (tabName.toLowerCase().includes('stack')) return <Code size={20} />;
    
    return <Code size={20} />;
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]);
    }
  };

  return (
    <div className="tab-button-container">
      <div className={`tab-button-wrapper ${theme !== 'default' ? `theme-${theme}` : ''}`}>
        <div className="tab-button-grid">
          <div 
            className="tab-slider"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${activeTab * 100}%)`
            }}
          />
          
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            >
              <div className="tab-content">
                <div className="tab-icon">
                  {getIcon(index, tab)}
                </div>
                <span className="tab-text">{tab}</span>
              </div>
    
              {activeTab === index && (
                <div className="shine-effect" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabButton;