import React from 'react'

export default function DemoFunctionComponent() {
    return ( // Nội dung thẻ chưa trong lệnh return, LƯU Ý: Nội dung phải được bao bọc bởi 1 thẻ
        <div className="container text-white bg-dark mt-2">
            <div className="display-4 p-5">
                Components
            </div>
            <div className="p-2 pl-5">
                Nội dung Components
            </div>
        </div>
    )
}
