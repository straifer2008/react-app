import React, {Component} from 'react';
import './SitemapWrap.less';
import ExpansionPanel from 'material-expansion-panel';
import 'material-expansion-panel/dist/material-expansion-panel.min.css';

class SitemapWrap extends Component {
    render() {
        const categories = [
            {
                id: 0,
                name: 'Вітальня',
                icon: 'store',
                category: [
                    {
                        id: 1,
                        name: 'Ліжко',
                        icon: 'scanner',
                        subCategory: [{
                            id: 1,
                            name: 'Ліжко Divan'
                        }]
                    },
                    {
                        id: 2,
                        name: 'Тумба',
                        icon: 'router',
                        subCategory: [{
                            id: 1,
                            name: 'Тумба Divan'
                        }]
                    },
                    {
                        id: 3,
                        name: 'Крісло'
                    }
                ],
            },
            {
                id: 1,
                name: 'Кухня',
                icon: 'pan_tool',
                category: [
                    {
                        id: 1,
                        name: 'Плита'
                    },
                    {
                        id:2,
                        name:  'Шкаф'
                    },
                    {
                        id: 3,
                        name: 'Стільниця'
                    }
                ]
            },
            {
                id: 3,
                name: 'Кімната для гостей',
                icon: 'face',
                category: [
                    {
                        id: 1,
                        name: 'Диван'
                    },
                    {
                        id:2,
                        name:  'Крісло'
                    },
                    {
                        id: 3,
                        name: 'Стіл'
                    }
                ]
            },
            {
                id: 4,
                name: 'Ванна',
                icon: 'wb_incandescent',
                category: [
                    {
                        id: 1,
                        name: 'Раковина'
                    },
                    {
                        id:2,
                        name:  'Змішувач'
                    },
                    {
                        id: 3,
                        name: 'Дзеркало'
                    }
                ]
            }
        ];
        return (
          <div className={`SitemapWrap ${ this.props.show ? 'SitemapWrap-show' : null}`}>
            {
              categories.map((item, i)=> (
                <ExpansionPanel key={i} titleIcon={item.icon} title={item.name} expandedTitle={item.name}>
                  {item.category.map((val, index) => (
                    <div key={index}>
                      {val.subCategory ?
                        <ExpansionPanel title={val.name} titleIcon={val.icon} expandedTitle={val.name}>
                          {val.subCategory.map((subVal, key) => (
                            <div className='SitemapWrap_lowCategory' key={key}>{subVal.name}</div>
                                ))}
                        </ExpansionPanel>
                          : <p className='SitemapWrap_lowCategory' key={index.id}>{val.name}</p>}
                    </div>
                    ))}
                </ExpansionPanel>
              ))
            }
          </div>
        )
    }
}

export default SitemapWrap;
