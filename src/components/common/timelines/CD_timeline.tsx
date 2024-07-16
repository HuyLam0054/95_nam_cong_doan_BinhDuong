/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import Image from "next/image";
import { ImageHistory } from "../images/image";
import { AccordionDH } from "../accordion/accordion_dh";
import { DetailPopover } from "../popovers/detail_popover";

export interface ICDTimelineProps {}

export function CDTimeline(props: ICDTimelineProps) {
  return (
    <>
      {/* sự ra đời */}
      <div className="mx-auto mb-5">
        <span className="font-bold text-xl uppercase mx-auto text-red-700 ">
          I. khái quát sự ra đời của giai cấp công nhân
        </span>
      </div>
      <div>
        <Timeline>
          {/* 1. sự ra đời của giai cấp công nhân */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Từ cuối thế kỉ XIX - Đầu thế kỷ XX</Timeline.Time>
              <Timeline.Title>
                Sự ra đời của giai cấp công nhân Việt Nam
              </Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp; Giai cấp công nhân Việt Nam ra đời và phát triển
                    trong quá trình khai thác thuộc địa của thực dân Pháp cuối
                    thế kỷ XIX. Trước khi bị xâm lược, xã hội Việt Nam là xã hội
                    phong kiến với hai giai cấp chính: địa chủ và nông dân, nền
                    kinh tế chủ yếu dựa vào sản xuất tiểu nông. Sau khi thực dân
                    Pháp hoàn thành việc xâm lăng, họ tiến hành khai thác thuộc
                    địa lần thứ nhất trên quy mô cả nước, xây dựng các nhà máy
                    và cơ sở công nghiệp, dẫn đến hình thành đội ngũ công nhân
                    đầu tiên. Trước Thế chiến I, Việt Nam có khoảng 10 vạn công
                    nhân, chủ yếu tập trung ở Hà Nội, Sài Gòn - Chợ Lớn, Hải
                    Phòng và vùng mỏ Quảng Ninh. <br />
                    &emsp; Sau Thế chiến I, thực dân Pháp tiến hành khai thác
                    thuộc địa lần thứ hai, đầu tư mạnh vào khai khoáng, giao
                    thông, đồn điền và công nghiệp chế biến, dẫn đến số lượng
                    công nhân Việt Nam tăng lên hơn 22 vạn người vào năm 1929.
                    Dưới sự áp bức của thực dân và phong kiến, giai cấp công
                    nhân đoàn kết đấu tranh đòi quyền lợi, hình thành các Hội Ái
                    hữu và Hội Tương tế. Cuối năm 1920,{" "}
                    <DetailPopover
                      name={`Tôn Đức Thắng`}
                      date={`1888 - 1980`}
                      img_url={`https://upload.wikimedia.org/wikipedia/vi/thumb/7/73/Tonducthang.jpg/330px-Tonducthang.jpg`}
                      detail={`Ông là một nhà cách mạng và chính trị gia nổi tiếng của Việt Nam, sinh tại xã Mỹ Hòa Hưng, thành phố Long Xuyên, tỉnh An Giang. Ông tham gia vào hoạt động cách mạng từ rất sớm, nổi bật với vai trò lãnh đạo trong cuộc bãi công Ba Son năm 1919, đánh dấu bước ngoặt quan trọng trong phong trào công nhân Việt Nam. Trong suốt sự nghiệp của mình, ông giữ nhiều vị trí quan trọng và có nhiều đóng góp lớn cho đất nước, đặc biệt là trong giai đoạn kháng chiến chống Pháp và chống Mỹ. Từ năm 1969 đến 1980, Tôn Đức Thắng là Chủ tịch nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, được biết đến như một lãnh đạo tận tụy, luôn đặt lợi ích của nhân dân và đất nước lên hàng đầu.`}
                    />{" "}
                    thành lập Công hội Ba Son ở Sài Gòn, mở đầu phong trào đấu
                    tranh giải phóng giai cấp và dân tộc.
                  </div>
                  <ImageHistory
                    img_add={`https://file3.qdnd.vn/data/images/0/2020/02/02/vietcuong/c3.jpg`}
                    description={`Giai cấp Công nhân thời kỳ Pháp thuộc`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          {/* 2. Sự ra đời của Công hội đỏ Bắc kỳ */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1925 - Năm 1929</Timeline.Time>
              <Timeline.Title>
                Sự ra đời của Công hội đỏ Bắc Kỳ - tiền thân của Công đoàn Việt
                Nam ngày nay
              </Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp;Quá trình hình thành và phát triển của Công hội đỏ Bắc
                    Kỳ gắn liền với hoạt động cách mạng của Lãnh tụ Nguyễn Ái
                    Quốc. Trong những năm đầu thế kỷ XX, Nguyễn Ái Quốc đã tham
                    gia và gia nhập nhiều tổ chức công đoàn quốc tế. Người đặt
                    nền tảng lý luận và tư tưởng cho việc thành lập Công đoàn
                    Việt Nam, như được nêu rõ trong tác phẩm "Đường Kách mệnh".
                    <br /> &emsp;Tháng 6/1925, Nguyễn Ái Quốc sáng lập Hội Việt
                    Nam Cách mạng Thanh niên ở Quảng Châu và tổ chức phong trào
                    "Vô sản hóa" trong các nhà máy, xí nghiệp giai đoạn
                    1925-1928. Sự ra đời của Chi bộ Cộng sản đầu tiên (3/1929)
                    và Đông Dương Cộng sản Đảng (6/1929) là kết quả của nỗ lực
                    vận động công nhân, với{" "}
                    <DetailPopover
                      name={`Nguyễn Đức Cảnh`}
                      date={`1908 - 1932`}
                      img_url={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nguyen_Duc_Canh.jpg/375px-Nguyen_Duc_Canh.jpg`}
                      detail={`Ông là một nhà cách mạng và lãnh đạo công nhân nổi tiếng của Việt Nam. Sinh tại làng Diêm Điền, huyện Thụy Anh, tỉnh Thái Bình, ông sớm gia nhập phong trào cách mạng và có nhiều đóng góp quan trọng. Năm 1927, Nguyễn Đức Cảnh gia nhập Tân Việt Cách mạng Đảng và trở thành một trong những sáng lập viên của Đảng Cộng sản Việt Nam. Ông đóng vai trò quan trọng trong việc thành lập Tổng Công hội Đỏ Bắc Kỳ và lãnh đạo các cuộc đấu tranh của công nhân, đặc biệt là cuộc bãi công của thợ máy ở Hải Phòng năm 1930. Nguyễn Đức Cảnh bị bắt và bị xử tử năm 1932, để lại một tấm gương hy sinh anh dũng cho sự nghiệp cách mạng của dân tộc.`}
                    />{" "}
                    đóng vai trò quan trọng. <br /> &emsp;Nhận thức vai trò của
                    tổ chức Công hội và công nhân, Nguyễn Đức Cảnh và đồng chí
                    đã tổ chức phong trào công nhân Bắc Kỳ để thành lập Công
                    hội. Ngày 28/7/1929, Đại hội đại biểu Tổng Công hội Đỏ Bắc
                    Kỳ lần thứ nhất được tổ chức do Nguyễn Đức Cảnh chủ trì,
                    quyết định thành lập Tổng Công hội Đỏ Bắc Kỳ và thông qua
                    các điều lệ, hệ thống tổ chức. Đại hội cũng ra báo "Lao
                    động" và tạp chí "Công hội Đỏ", bầu Nguyễn Đức Cảnh làm Hội
                    trưởng. <br /> &emsp;Sự kiện thành lập Tổng Công hội Đỏ Bắc
                    Kỳ là một dấu mốc quan trọng trong lịch sử phong trào công
                    nhân và Công đoàn Việt Nam, từ đó giai cấp công nhân có một
                    tổ chức cách mạng rộng lớn, hoạt động có tôn chỉ, mục đích
                    rõ ràng.
                  </div>
                  <ImageHistory
                    img_add={`https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/27/1221756/2-VHTT-1025112.jpg?w=660`}
                    description={`Số nhà 15 Hàng Nón, nơi diễn ra Hội nghị thành lập Tổng Công hội Đỏ Bắc Kỳ ngày 28/7/1929`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      {/* lịch sử thời kì */}
      <div className="mx-auto mb-5">
        <span className="font-bold text-xl uppercase mx-auto text-red-700 ">
          II. phong trào công nhân và hoạt động công đoàn qua các thời kì cách
          mạng
        </span>
      </div>
      <div>
        <Timeline>
          {/* 1. thời kì đấu tranh dành chính quyền */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1930 - Năm 1945</Timeline.Time>
              <Timeline.Title>
                Thời kì đấu tranh dành chính quyền
              </Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp;Ngày 03/02/1930, Đảng Cộng sản Việt Nam được thành lập
                    và lãnh đạo Tổng Công hội Đỏ tập hợp lực lượng công nhân,
                    tạo nên cao trào Xô Viết - Nghệ Tĩnh 1930 - 1931. Cuối năm
                    1931, phong trào bị thực dân Pháp đàn áp, cán bộ Đảng và
                    Công hội Đỏ bị bắt, làm gián đoạn liên lạc giữa Đảng và quần
                    chúng. Dù bị kiểm soát gắt gao, Công hội Đỏ vẫn tích cực vận
                    động và phát triển tổ chức.
                    <br /> &emsp;Từ năm 1932 - 1936, phong trào cách mạng phục
                    hồi. Từ năm 1936 - 1939, Công hội Đỏ đổi tên thành Nghiệp
                    đoàn Ái hữu và hoạt động bán công khai, giúp phong trào công
                    nhân phát triển mạnh mẽ. Khi Thế chiến II bùng nổ, thực dân
                    Pháp đàn áp phong trào, Nghiệp đoàn Ái hữu phải hoạt động bí
                    mật, đổi tên thành "Hội Công nhân phản đế" và năm 1941 thành
                    "Hội Công nhân cứu quốc", nòng cốt của Việt Minh.
                    <br /> &emsp; Dưới sự lãnh đạo của Đảng, Công đoàn trở thành
                    trung tâm đoàn kết của công nhân. Với hơn 20 vạn người vào
                    năm 1945, đoàn viên Công đoàn là lực lượng nòng cốt trong
                    Cách mạng tháng Tám 1945, khai sinh nước Việt Nam Dân chủ
                    Cộng hòa, nhà nước công nông đầu tiên ở Đông Nam Á.
                  </div>
                  <ImageHistory
                    img_add={`https://images.hcmcpv.org.vn//Uploads/Image/23092021556455A6/H2.JPG`}
                    description={`Công nhân ngành Kiến trúc Sài Gòn đấu tranh đòi trả tự do cho cán bộ nghiệp đoàn bị bắt giam tháng 9/1945`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          {/* 2. Thời kì kháng chiến chống thực dân Pháp */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1945 - Năm 1954</Timeline.Time>
              <Timeline.Title>
                Thời kì kháng chiến chống thực dân Pháp
              </Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp;Sau Cách mạng tháng Tám thành công năm 1945, dưới sự
                    lãnh đạo của Đảng Cộng sản Việt Nam, vào tháng 3/1946, Hội
                    nghị đại biểu Công nhân cứu quốc Bắc Bộ, Trung Bộ và Tổng
                    Công đoàn Nam Bộ đã quyết định thống nhất thành "Hội Công
                    nhân cứu quốc". Tháng 6/1946, Hội nghị cán bộ Công đoàn cứu
                    quốc đổi tên thành "Công đoàn". Ngày 20/7/1946, tại Nhà hát
                    lớn Hà Nội, "Tổng Liên đoàn Lao động Việt Nam" được thành
                    lập và vào năm 1949 được công nhận là thành viên chính thức
                    của Liên hiệp Công đoàn thế giới. <br /> &emsp;Công đoàn và
                    giai cấp công nhân Việt Nam đã đóng góp quan trọng trong
                    việc bảo vệ và phát triển thành quả của Cách mạng Tháng Tám,
                    tham gia tích cực vào cuộc Tổng tuyển cử bầu Quốc hội đầu
                    tiên của Việt Nam Dân chủ Cộng hòa. Trước sự xâm lược của
                    thực dân Pháp lần thứ hai, các đội cảm tử Thủ đô, chủ yếu là
                    công nhân, đã chiến đấu mạnh mẽ. <br /> &emsp;Tổng Liên đoàn
                    Lao động Việt Nam đã tổ chức vận động công nhân, viên chức
                    lao động tham gia sản xuất vũ khí, khí tài quân sự, đồng
                    thời khắc phục khó khăn, thi đua lao động để phục vụ kháng
                    chiến. Đại hội lần thứ I của Công đoàn Việt Nam (01 -
                    15/01/1950) đã đề ra mục tiêu quyết liệt với việc động viên
                    công nhân sản xuất vũ khí, khí tài phục vụ chiến thắng chống
                    thực dân Pháp. <br /> &emsp;Phong trào Công đoàn đã có sự
                    chuyển biến lớn về nhận thức và phương thức hoạt động trong
                    các xí nghiệp quốc doanh, đại diện cho công nhân tham gia
                    vào quản lý sản xuất kinh doanh. Giai đoạn này, Công đoàn đã
                    tổ chức thi đua sản xuất, cải tiến kỹ thuật, và thúc đẩy
                    sáng kiến, trau dồi nghề nghiệp. Vào chiến khu Việt Bắc,
                    Công đoàn đã có đóng góp quan trọng trong cuộc kháng chiến
                    và đã góp phần vào chiến thắng lịch sử Điện Biên Phủ (1954),
                    chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương.
                  </div>
                  <ImageHistory
                    img_add={`https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2023/11/14/cd2-16999348544981825932383.jpg`}
                    description={`Đại tướng Võ Nguyên Giáp với các đại biểu dự Đại hội Công đoàn Việt Nam lần thứ I từ 1-15/1/1950 tại Thái Nguyên - Ảnh: TTXVN`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          {/* 3. Thời kì kháng chiến chống Mỹ */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1954 - Năm 1975</Timeline.Time>
              <Timeline.Title>Thời kì kháng chiến chống Mỹ</Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp;Sau chiến thắng Điện Biên Phủ, Việt Nam đã tạm thời bị
                    chia thành hai miền: miền Bắc giải phóng hoàn toàn và bắt
                    đầu xây dựng chủ nghĩa xã hội, trong khi miền Nam vẫn chịu
                    ách thống trị của Mỹ và chính quyền Ngô Đình Diệm. Trong bối
                    cảnh này, Tổng Liên đoàn Lao động Việt Nam (sau này đổi
                    thành Tổng Công đoàn Việt Nam) đã chủ động tổ chức và động
                    viên quần chúng lao động, đặc biệt là công nhân, tham gia
                    vào công tác phục hồi sản xuất và bảo đảm an ninh trật tự.
                    <br /> &emsp;Ở miền Bắc, các công nhân đã tích cực tham gia
                    vào sản xuất và thực hiện tiết kiệm, chống lãng phí để nhanh
                    chóng khôi phục hoạt động sản xuất tại các cơ sở công
                    nghiệp. Các phong trào thi đua như "Sóng Duyên Hải", "Hợp
                    tác xã Thành Công", "Ba quyết tâm" đã nổi bật, với nhiều
                    công nhân được phong tặng danh hiệu Anh hùng Lao động vì
                    những đóng góp xuất sắc trong lao động và chiến đấu.
                    <br /> &emsp;Ở miền Nam, Công đoàn hoạt động trong hoàn cảnh
                    khó khăn với sự đàn áp từ Mỹ và chính quyền Đệ nhất Cộng
                    hòa. Tuy nhiên, họ đã không ngừng đấu tranh để bảo vệ quyền
                    lợi của công nhân và tổ chức các hoạt động lao động.
                    <br /> &emsp;Năm 1957, Luật Công đoàn được ban hành, củng cố
                    vai trò lãnh đạo của Công đoàn trong xã hội và hỗ trợ phát
                    triển kinh tế, văn hóa. Công đoàn đã tham gia tích cực vào
                    việc xây dựng chế độ chính sách mới và thúc đẩy các phong
                    trào thi đua lao động sản xuất.
                    <br /> &emsp;Đại hội lần thứ II (1961) và lần thứ III (1974)
                    của Công đoàn Việt Nam đã khẳng định vai trò quan trọng của
                    công nhân trong xây dựng chủ nghĩa xã hội và tham gia vào
                    cuộc đấu tranh thống nhất nước nhà. Các đại hội này cũng đề
                    ra mục tiêu rõ ràng và bầu ra lãnh đạo mới, đồng thời thúc
                    đẩy phong trào thi đua lao động.
                    <br /> &emsp;Tổng Công đoàn Việt Nam đã đóng vai trò quan
                    trọng trong việc đoàn kết và chỉ đạo công nhân tham gia vào
                    chiến đấu giải phóng và xây dựng đất nước, góp phần quan
                    trọng vào thành công của cuộc kháng chiến và quá trình thống
                    nhất đất nước.
                  </div>
                  <ImageHistory
                    img_add={`https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/07/21/bh-4009-resize21-16-13-29.jpg`}
                    description={`Chủ tịch Hồ Chí Minh nói chuyện tại Đại hội Công đoàn Việt Nam lần thứ II - Ảnh: TTXVN`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          {/* 4. Thời kì xây dựng chủ nghĩa xã hội */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1975 - Năm 1986</Timeline.Time>
              <Timeline.Title>Thời kì xây dựng chủ nghĩa xã hội</Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3 ">
                    &emsp;Sau chiến thắng mùa Xuân 1975 và việc thống nhất đất
                    nước, Việt Nam đã tạo điều kiện để thống nhất tổ chức Công
                    đoàn trên phạm vi toàn quốc. Vào ngày 06/6/1976, Hội nghị
                    Công đoàn toàn quốc tại TP. Hồ Chí Minh đã quyết định thống
                    nhất Công đoàn hai miền thành "Tổng Công đoàn Việt Nam".
                    <br /> &emsp;Công đoàn trong giai đoạn này đã phát triển các
                    phong trào thi đua lao động sản xuất, khuyến khích sáng kiến
                    và cải tiến kỹ thuật, góp phần quan trọng vào công cuộc xây
                    dựng và bảo vệ Tổ quốc. Công đoàn cũng chú trọng đến công
                    tác phát triển đoàn viên, gia tăng số lượng đoàn viên và cơ
                    sở công đoàn. Ngoài ra, họ còn tham gia vào các lĩnh vực bảo
                    hiểm xã hội, bảo hộ lao động và đề nghị Nhà nước bổ sung các
                    chế độ phụ cấp như ốm đau, thai sản và trợ cấp khó khăn.
                    <br /> &emsp;Kỷ niệm 55 năm Ngày thành lập Công đoàn Việt
                    Nam vào ngày 28/7/1984, Tổng Công đoàn Việt Nam đã được tặng
                    Huân chương Sao Vàng - Huân chương cao quý nhất của Nhà nước
                    Việt Nam, thể hiện sự công nhận và đánh giá cao đối với đóng
                    góp của công đoàn trong sự nghiệp quốc gia.
                  </div>
                  <ImageHistory
                    img_add={`https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2023/11/14/cd5-16999360984941038976767.jpg`}
                    description={`Lễ khai mạc Đại hội Công đoàn Việt Nam lần thứ IV sáng ngày 8/5/1978, tại Hà Nội - Ảnh: TTXVN`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          {/* 5. Thời kì thực hiện công cuộc đổi mới đất nước */}
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Năm 1986 - Nay</Timeline.Time>
              <Timeline.Title>
                Thời kì thực hiện công cuộc đổi mới đất nước
              </Timeline.Title>
              <Timeline.Body>
                <div className="grid w-full lg:grid-cols-5 gap-1">
                  <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-3">
                    &emsp;Trong bối cảnh đất nước tiến hành đổi mới, từng bước
                    hội nhập, Đại hội lần thủ VI Công đoàn Việt Nam họp từ ngày
                    17 - 20/10/1988 tại Thủ đô Hà Nội đã xác định mục tiêu:
                    "Thực hiện đường lối đổi mới của Đảng vì việc làm, đời sống,
                    dân chủ và công bằng xã hội". Đại hội quyết định đổi tên
                    "Tổng Công đoàn Việt Nam" thành "Tổng Liên đoàn Lao động
                    Việt Nam". Đại hội đã bầu Ban Chấp hành Tổng Liên đoàn Lao
                    động Việt Nam gồm 155 ủy viên, Ban Thư ký gồm 15 ủy viên.
                    Đồng chí Nguyễn Văn Tư, Ủy viên Ban Chấp hành Trung ương
                    Đảng được bầu làm Chủ tịch; đồng chí Cù Thị Hậu, Ủy viên Ban
                    Chấp hành Trung ương Đảng được bầu làm Phó Chủ tịch; đồng
                    chí Dương Xuân An được bầu làm Phó Chủ tịch. Trong những năm
                    đầu của thời kỳ đổi mới, giai cấp công nhân và tổ chức Công
                    đoàn Việt Nam đã có nhiều đóng góp vào kết quả thực hiện kế
                    hoạch 5 năm (1986 - 1990), đưa đất nước ta dần thoát khỏi
                    khó khăn, ổn định đời sống nhân dân và CNVCLĐ.
                  </div>
                  <ImageHistory
                    img_add={`https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2023/11/14/cd22-16999387280231148267482.jpg`}
                    description={`Ban Chấp hành Tổng Liên đoàn Lao động Việt Nam khóa XII, nhiệm kỳ 2018-2023 ra mắt Đại hội, chiều 26/9/2018, tại Hà Nội - Ảnh: TTXVN`}
                  />
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      {/* Tên gọi của Công đoàn Việt Nam qua các thời kỳ */}
      <div className="mx-auto mb-5">
        <span className="font-bold text-xl uppercase mx-auto text-red-700 ">
          III. Tên gọi của Công đoàn Việt Nam qua các thời kỳ
        </span>
      </div>
      <div>
        <Timeline horizontal>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1929 - 1935</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">hội công đỏ</span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1935 - 1939</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">nghiệp đoàn ái hữu</span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1939 - 1941</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">hội công nhân phản đế</span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1941 - 1946</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">hội công nhân cứu quốc</span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
        <Timeline horizontal>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1946 - 1961</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">
                  tổng liên đoàn lao động việt nam
                </span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1961 - 1988</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">tổng công đoàn việt nam</span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>1988 - nay</Timeline.Time>
              <Timeline.Title>
                <span className="uppercase">
                  tổng liên đoàn lao động việt nam
                </span>
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      {/* nội dung các kì đại hội */}
      <div className="mx-auto mb-5">
        <span className="font-bold text-xl uppercase mx-auto text-red-700 ">
          IV. nội dung các kỳ đại hội
        </span>
      </div>
      <div>
        <AccordionDH />
      </div>
    </>
  );
}
