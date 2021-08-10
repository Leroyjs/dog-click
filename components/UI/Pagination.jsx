import { config } from '../../config'

export const Pagination = ({pageNum,handler,total}) => {
    const paginationArray = [];
    const paginationArrayMobile = [];

    const countOfPage = Math.ceil(total/config.pageSize);
    let start = pageNum - 2 >=0?pageNum - 2:0;

    for(let i = start; i < countOfPage; i++){
        if(i-start<4){
            paginationArray.push(i+1)
        }else if( countOfPage === i + 1 ){
            paginationArray.push( i + 1 )
        }
        if(i-start === 4 && countOfPage-start>5){
            paginationArray.push('...')
        }
    }
    for(let i = start; i < countOfPage; i++){
        if(i-start<3){
            paginationArrayMobile.push(i+1)
        }else if( countOfPage === i + 1 ){
            paginationArrayMobile.push( i + 1 )
        }
        if(i-start === 3 && countOfPage-start>4){
            paginationArrayMobile.push('...')
        }
    }
    function handleClick(num){
        handler&&handler(num)
    }
    return (
        <div className="pagination">
            {pageNum!==1&&<div className="pagination__arrow-wrapper" onClick={()=>handleClick(pageNum-1)}>
                <svg
                    className="pagination__arrow pagination__arrow_left"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 13L1 7L7 1"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>}
            <div className="pagination__main pagination__main_desktop">
                {
                    paginationArray.map((item)=>(
                        item!=='...'?<div key={item} onClick={()=>handleClick(item)} className={"pagination__item text_type_main" + (pageNum===item?' pagination__item_active':'')}>{item}</div>:<div key={item}  className="pagination__more-item text_type_main">...</div>
                    ))
                }
            </div>
            <div className="pagination__main pagination__main_mobile">
                {
                    paginationArrayMobile.map((item)=>(
                        item!=='...'?<div key={item} onClick={()=>handleClick(item)} className={"pagination__item text_type_main" + (pageNum===item?' pagination__item_active':'')}>{item}</div>:<div key={item}  className="pagination__more-item text_type_main">...</div>
                    ))
                }
            </div>
            {pageNum!==countOfPage&&<div className="pagination__arrow-wrapper" onClick={()=>handleClick(pageNum+1)}>
                <svg
                    className="pagination__arrow pagination__arrow_right"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.999999 1L7 7L1 13"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>}
        </div>
    );
};
