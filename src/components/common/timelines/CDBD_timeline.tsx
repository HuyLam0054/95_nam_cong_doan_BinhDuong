"use client";

import { Timeline } from "flowbite-react";
import { NameCardOld } from "../cards/name_card_old";

export function CDBDTimeline() {
  return (
    <>
      <div>
        <span className="text-lg font-semibold">
          &emsp;&emsp;Công đoàn Bình Dương đã và đang đóng vai trò quan trọng
          trong việc bảo vệ quyền lợi của người lao động, thúc đẩy phát triển
          kinh tế và xã hội của tỉnh, đồng thời đóng góp vào sự nghiệp xây dựng
          và bảo vệ Tổ quốc. Lịch sử Công đoàn Bình Dương gắn liền với những
          bước phát triển và biến đổi của tỉnh Bình Dương qua các thời kỳ. Dưới
          đây là tóm tắt về lịch sử và quá trình phát triển của Công đoàn Bình
          Dương:
        </span>
      </div>
      <div className="pt-10 px-10 xl:px-36">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Tháng 1 năm 2024</Timeline.Time>
              <Timeline.Title>Chi Tiết Lịch sử</Timeline.Title>
              <Timeline.Body>
                Chi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Tháng 1 năm 2024</Timeline.Time>
              <Timeline.Title>Chi Tiết Lịch sử</Timeline.Title>
              <Timeline.Body>
                Chi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Tháng 1 năm 2024</Timeline.Time>
              <Timeline.Title>Chi Tiết Lịch sử</Timeline.Title>
              <Timeline.Body>
                Chi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch sửChi Tiết Lịch
                sửChi Tiết Lịch
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      <div>
        <span className="text-xl uppercase font-semibold px-auto">
          Lãnh đạo Liên đoàn Lao động Bình Dương:
        </span>
      </div>
      <div className="pt-10 grid lg:grid-cols-4 gap-2">
        <NameCardOld
          position={`Đồng chí`}
          name={`Nguyễn Thường Sơn`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Thư ký liên hiệp Công đoàn tỉnh Sông Bé khoá I`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Ngô Tấn  Đạt`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Thư ký liên hiệp Công đoàn tỉnh Sông Bé khoá II`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Trần Xuân Minh`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Thư ký liên hiệp Công đoàn tỉnh Sông Bé khoá II - III`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Nguyễn Văn Tấn`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Sông Bé khoá IV`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Nguyễn Văn Minh`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IV - V`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Trịnh Thị Kim Liên`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá V - VI`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Nguyễn Văn Nam`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IV - VII - VIII`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Lê Thành Nhơn`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá VIII - IX`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Bùi Thanh Nhân`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IX`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Trương Thị Bích Hạnh`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IX - X`}
        />
        <NameCardOld
          position={`Đồng chí`}
          name={`Nguyễn Kim Loan`}
          img_add={`https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
          description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá XI-XII-XIII`}
        />
      </div>
    </>
  );
}
