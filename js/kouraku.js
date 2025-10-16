
  // = ======================================================================
  // SCRIPT DỊCH THUẬT
  // =======================================================================
  const translations = {
    'vi': {
      'nav_intro': 'Giới thiệu',
      'nav_events': 'Sự kiện',
      'nav_guide': 'Hướng dẫn',
      'nav_special': 'Đặc biệt',
      'hero_text': 'Khám phá vẻ đẹp một trong 3 khu vườn nổi tiếng của Nhật Bản',
      'intro_title': 'Giới thiệu',
      'intro_p': 'Vườn Korakuen ở thành phố Okayama được biết đến rộng rãi như một trong Ba đại danh viên của Nhật Bản. Được xây dựng vào năm 1687 bởi lãnh chúa Okayama, Ikeda Tsunamasa, khu vườn này là một ví dụ tiêu biểu của vườn kiểu dạo (kaiyū-shiki teien), nơi du khách có thể thưởng thức những khung cảnh khác nhau trên mỗi bước đi. Các yếu tố như hồ nước, suối nhỏ, đồi nhân tạo, trà thất và bãi cỏ rộng lớn hòa quyện hài hòa, mang đến vẻ đẹp theo từng mùa – từ hoa anh đào rực rỡ vào mùa xuân cho đến lá đỏ tuyệt sắc vào mùa thu. Cùng với lâu đài Okayama nằm kề bên, Korakuen đem đến cho du khách một không gian tĩnh lặng và thanh tao, nơi lịch sử và thiên nhiên giao hòa.',
      'seasons_title': 'Cảnh sắc bốn mùa',
      'seasons_p': 'Vườn Korakuen mang đến vẻ đẹp khác nhau theo từng mùa trong năm. Mùa xuân, hoa anh đào và hoa mai nở rực rỡ, tạo nên khung cảnh đầy sắc màu. Mùa hè, bãi cỏ xanh mướt cùng hồ sen rộng lớn mang lại cảm giác mát lành. Mùa thu, lá phong nhuộm sắc đỏ vàng rực rỡ, bao phủ toàn bộ khu vườn trong ánh vàng óng ả. Mùa đông, tuyết nhẹ nhàng phủ trắng, đem đến bầu không khí tĩnh lặng và huyền ảo. Chính những cảnh sắc được dệt nên bởi sự chuyển đổi của bốn mùa là nét cuốn hút lớn nhất của Korakuen.',
      'season_spring': 'Xuân',
      'season_summer': 'Hạ',
      'season_autumn': 'Thu',
      'season_winter': 'Đông',
      'events_title': 'Các sự kiện trong năm',
      'event_spring_title': 'Mùa xuân',
      'event_spring_p': '<b>Ngắm hoa anh đào (Hanami) (cuối tháng 3 – đầu tháng 4):</b><br>Cả khu vườn rực rỡ với hơn 200 cây anh đào, thu hút rất đông du khách đến thưởng hoa. <br><b>Trình diễn trà đạo ngoài trời:</b><br>Thưởng trà giữa khung cảnh hoa nở, mang đậm nét truyền thống Nhật Bản',
      'event_summer_title': 'Mùa hè',
      'event_summer_p': '<b>Lễ hội đom đóm (đầu tháng 6):</b><br>Du khách có thể ngắm hàng ngàn con đom đóm bay lượn dọc theo con suối trong vườn. <br><b>Sự kiện chiếu sáng ban đêm (tháng 8):</b><br>Vườn được thắp sáng lung linh, kết hợp ánh sáng và âm nhạc, tạo nên không gian huyền ảo.',
      'event_autumn_title': 'Mùa thu',
      'event_autumn_p': '<b>Lễ hội ngắm lá đỏ (tháng 11):</b><br>Cây phong và bạch quả trong vườn đổi sắc rực rỡ, có các buổi trình diễn nghệ thuật truyền thống.<br><b>Chiếu sáng ban đêm mùa thu</b><br>Vườn lại được trang hoàng ánh sáng đặc biệt, nổi bật vẻ đẹp của lá đỏ trong đêm.',
      'event_winter_title': 'Mùa đông',
      'event_winter_p': '<b>Lễ hội Năm mới (ngày 1–3 tháng 1):</b><br>Người dân và du khách đến vườn để đón năm mới, tham gia các hoạt động văn hóa như bắn cung, biểu diễn trống Nhật, uống rượu sake mừng xuân. <br><b>Trưng bày truyền thống mùa đông:</b><br>Các loại cây được che chắn bằng giàn tre để bảo vệ khỏi tuyết, tạo nên cảnh quan đặc trưng mùa lạnh.',
      'events_conclusion': 'Những sự kiện này không chỉ tôn vinh vẻ đẹp bốn mùa mà còn cho phép du khách trải nghiệm sâu sắc văn hóa Nhật Bản.',
      'guide_title': 'Hướng dẫn',
      'guide_address': 'Địa chỉ : 〒703-8257 Okayama-ken, Okayama-shi, Kita-ku, Kōraku-en 1-5',
      'guide_hours_title': 'Thời gian mở cửa : ',
      'table_caption': 'Tóm tắt giờ mở cửa trong năm',
      'th_period': 'Thời gian',
      'th_open': 'Giờ mở cửa',
      'th_close': 'Giờ đóng cửa',
      'th_last_entry': 'Cuối lượt vào',
      'table_special_event': 'Sự kiện ánh sáng đặc biệt',
      'guide_note': '* Vườn mở quanh năm. Giờ có thể thay đổi vào ngày diễn ra sự kiện (ví dụ “幻想庭園”).',
      'special_title': 'Lâu đài Okayama',
      'special_p': 'Sau khi dạo bước trong không gian thanh bình của vườn Korakuen, du khách có thể tiếp tục hành trình bằng cách ghé thăm lâu đài Okayama — một biểu tượng lịch sử nằm ngay gần đó. Chỉ vài phút đi bộ, bạn sẽ được đắm mình trong vẻ đẹp cổ kính và những câu chuyện xưa của vùng đất từng là trung tâm quyền lực thời Edo. <br><b>Lâu đài Okayama </b>còn được gọi là "U-jō" (Lâu đài Quạ), nổi bật với những bức tường sơn đen đặc trưng và là một trong những biểu tượng lịch sử của thành phố Okayama. Được xây dựng vào cuối thế kỷ 16, với kiến trúc của lâu đài kết hợp giữa những bức tường đá kiên cố và mái ngói truyền thống Nhật Bản, từ tháp chính có thể phóng tầm mắt bao quát toàn cảnh thành phố và dòng sông Asahi. Bên trong lâu đài hiện trưng bày áo giáp, vũ khí cùng nhiều hiện vật lịch sử của khu vực, mang đến cho du khách những trải nghiệm hấp dẫn.',
      'sidebar_p': 'Okayama nổi tiếng với khí hậu ôn hòa, những bãi biển thơ mộng và ánh nắng chan hòa quanh năm. Đây cũng là quê hương của Momotaro—nhân vật anh hùng trong truyền thuyết Nhật Bản, người đã trở thành biểu tượng văn hóa và niềm tự hào của người dân nơi đây. Hãy cùng khám phá hành trình Momotaro—một trải nghiệm du lịch sinh thái độc đáo tại Okayama để nhận được những điều bất ngờ thú vị nhé.',
      'sidebar_link1': 'Hành trình tại Korakuen',
      'sidebar_link2': 'Hành trình tại Thành Okayama',
      'footer_text': '© 2025 Dự án Du lịch sinh thái Okayama. Bảo lưu mọi quyền.'
    },
    'en': {
      'nav_intro': 'Introduction',
      'nav_events': 'Events',
      'nav_guide': 'Guide',
      'nav_special': 'Special',
      'hero_text': "Discover the beauty of one of Japan's three most famous gardens",
      'intro_title': 'Introduction',
      'intro_p': "Korakuen Garden in Okayama City is widely known as one of the Three Great Gardens of Japan. Built in 1687 by the Okayama lord, Ikeda Tsunamasa, this garden is a typical example of a strolling garden (kaiyū-shiki teien), where visitors can enjoy different landscapes with every step. Elements such as ponds, small streams, artificial hills, teahouses, and vast lawns blend harmoniously, offering beauty in every season – from vibrant cherry blossoms in spring to stunning red leaves in autumn. Together with the adjacent Okayama Castle, Korakuen offers visitors a quiet and elegant space where history and nature converge.",
      'seasons_title': 'Seasonal Landscapes',
      'seasons_p': "Korakuen Garden offers different beauty in each season of the year. In spring, cherry and plum blossoms bloom brilliantly, creating a colorful scene. In summer, the green lawns and large lotus pond bring a cool feeling. In autumn, the maple leaves turn a brilliant red and yellow, covering the entire garden in a golden glow. In winter, light snow gently covers the landscape, bringing a quiet and magical atmosphere. It is these scenes, woven by the changing of the four seasons, that are the greatest attraction of Korakuen.",
      'season_spring': 'Spring',
      'season_summer': 'Summer',
      'season_autumn': 'Autumn',
      'season_winter': 'Winter',
      'events_title': 'Annual Events',
      'event_spring_title': 'Spring',
      'event_spring_p': '<b>Cherry Blossom Viewing (Hanami) (late March – early April):</b><br>The entire garden is brilliant with over 200 cherry trees, attracting many visitors to enjoy the flowers. <br><b>Outdoor Tea Ceremony:</b><br>Enjoying tea amidst the blooming flowers, a tradition rich in Japanese culture.',
      'event_summer_title': 'Summer',
      'event_summer_p': '<b>Firefly Festival (early June):</b><br>Visitors can watch thousands of fireflies flying along the stream in the garden. <br><b>Night Illumination Event (August):</b><br>The garden is beautifully lit, combining light and music to create a magical space.',
      'event_autumn_title': 'Autumn',
      'event_autumn_p': '<b>Red Leaf Viewing Festival (November):</b><br>The maple and ginkgo trees in the garden change to vibrant colors, with traditional art performances.<br><b>Autumn Night Illumination</b><br>The garden is again decorated with special lighting, highlighting the beauty of the red leaves at night.',
      'event_winter_title': 'Winter',
      'event_winter_p': "<b>New Year's Festival (January 1–3):</b><br>Locals and tourists come to the garden to welcome the new year, participating in cultural activities such as archery, Japanese drum performances, and drinking sake to celebrate spring. <br><b>Traditional Winter Display:</b><br>The plants are protected from snow with bamboo shelters, creating a characteristic winter landscape.",
      'events_conclusion': 'These events not only celebrate the beauty of the four seasons but also allow visitors to deeply experience Japanese culture.',
      'guide_title': 'Visitor Information',
      'guide_address': 'Address: 1-5 Korakuen, Kita-ku, Okayama-shi, Okayama-ken 703-8257',
      'guide_hours_title': 'Opening Hours:',
      'table_caption': 'Summary of Opening Hours Throughout the Year',
      'th_period': 'Period',
      'th_open': 'Opening Time',
      'th_close': 'Closing Time',
      'th_last_entry': 'Last Entry',
      'table_special_event': 'Special Illumination Event',
      'guide_note': '* The garden is open year-round. Hours may change on event days (e.g., "Gensō Teien").',
      'special_title': 'Okayama Castle',
      'special_p': 'After strolling through the peaceful space of Korakuen Garden, visitors can continue their journey by visiting Okayama Castle — a historical symbol located nearby. Just a few minutes walk, you will be immersed in the ancient beauty and old stories of the land that was once the center of power during the Edo period. <br><b>Okayama Castle</b>, also known as "U-jō" (Crow Castle), is notable for its characteristic black walls and is one of the historical symbols of Okayama City. Built in the late 16th century, the castle\'s architecture combines strong stone walls and traditional Japanese tile roofs. From the main tower, you can get a panoramic view of the city and the Asahi River. Inside the castle, armor, weapons, and many regional historical artifacts are displayed, offering visitors a fascinating experience.',
      'sidebar_p': 'Okayama is famous for its mild climate, beautiful beaches, and year-round sunshine. It is also the homeland of Momotaro—the hero of Japanese folklore, who has become a cultural symbol and a source of pride for the local people. Let\'s explore the Momotaro journey—a unique ecotourism experience in Okayama for some delightful surprises.',
      'sidebar_link1': 'Journey at Korakuen',
      'sidebar_link2': 'Journey at Okayama Castle',
      'footer_text': '© 2025 Okayama Ecotourism Project. All rights reserved.'
    },
    'ja': {
      'nav_intro': '紹介',
      'nav_events': 'イベント',
      'nav_guide': '案内',
      'nav_special': '特別',
      'hero_text': '日本三名園の美しさを発見',
      'intro_title': '紹介',
      'intro_p': '岡山市の後楽園は、日本三名園の一つとして広く知られています。1687年に岡山藩主・池田綱政によって造営されたこの庭園は、歩むごとに異なる景色を楽しめる回遊式庭園の典型的な例です。池、小川、築山、茶室、広大な芝生などの要素が調和し、春の桜から秋の紅葉まで、四季折々の美しさを見せてくれます。隣接する岡山城と共に、後楽園は歴史と自然が交わる静かで優雅な空間を訪問者に提供します。',
      'seasons_title': '四季の風景',
      'seasons_p': '後楽園は、一年を通して季節ごとに異なる美しさを見せます。春には桜や梅が咲き誇り、色彩豊かな景色が広がります。夏には緑の芝生と広大な蓮池が涼やかな雰囲気をもたらします。秋には紅葉が鮮やかな赤や黄色に染まり、庭園全体が黄金色に輝きます。冬には雪が静かに降り積もり、静寂で幻想的な雰囲気を醸し出します。四季の移ろいが織りなすこれらの風景こそ、後楽園の最大の魅力です。',
      'season_spring': '春',
      'season_summer': '夏',
      'season_autumn': '秋',
      'season_winter': '冬',
      'events_title': '年間イベント',
      'event_spring_title': '春',
      'event_spring_p': '<b>お花見（3月下旬～4月上旬）：</b><br>200本以上の桜が庭園を彩り、多くの花見客で賑わいます。<br><b>野点：</b><br>咲き誇る花々の中で、日本の伝統的なお茶を楽しむことができます。',
      'event_summer_title': '夏',
      'event_summer_p': '<b>ホタル祭り（6月上旬）：</b><br>庭園の小川沿いで何千ものホタルが舞う姿を鑑賞できます。<br><b>夜間特別開園（8月）：</b><br>庭園が美しくライトアップされ、光と音楽が幻想的な空間を創り出します。',
      'event_autumn_title': '秋',
      'event_autumn_p': '<b>紅葉祭り（11月）：</b><br>園内のモミジやイチョウが色鮮やかに紅葉し、伝統芸能の披露も行われます。<br><b>秋の夜間特別開園</b><br>再び特別な照明で飾られ、夜の紅葉の美しさを際立たせます。',
      'event_winter_title': '冬',
      'event_winter_p': '<b>新年祭（1月1日～3日）：</b><br>地元の人々や観光客が新年を祝いに訪れ、弓道や和太鼓の演奏、祝い酒の振る舞いなどの文化的な催しに参加します。<br><b>冬の伝統的な展示：</b><br>雪から植物を守るために竹の囲いが設置され、冬ならではの景観が作られます。',
      'events_conclusion': 'これらのイベントは、四季の美しさを称えるだけでなく、訪問者に日本の文化を深く体験させてくれます。',
      'guide_title': 'ご利用案内',
      'guide_address': '住所：〒703-8257 岡山県岡山市北区後楽園1-5',
      'guide_hours_title': '開園時間：',
      'table_caption': '年間開園時間概要',
      'th_period': '期間',
      'th_open': '開園',
      'th_close': '閉園',
      'th_last_entry': '入園締切',
      'table_special_event': '夜間特別開園',
      'guide_note': '※年中無休。イベント（例：「幻想庭園」）開催日は時間が変更される場合があります。',
      'special_title': '岡山城',
      'special_p': '後楽園の静かな空間を散策した後、すぐ近くにある歴史的なシンボル、岡山城を訪れて旅を続けることができます。徒歩数分で、かつて江戸時代の権力の中心であったこの地の古い美しさと物語に浸ることができます。<br><b>岡山城</b>は、その特徴的な黒い壁から「烏城（うじょう）」とも呼ばれ、岡山市の歴史的な象徴の一つです。16世紀末に建てられ、城の建築は堅固な石垣と日本の伝統的な瓦屋根を組み合わせています。天守閣からは市街と旭川の全景を一望できます。城内には、鎧や武器、地域の歴史的な遺物が多数展示されており、訪問者に魅力的な体験を提供します。',
      'sidebar_p': '岡山は、温暖な気候、美しいビーチ、そして一年中の日差しで有名です。また、日本の伝説の英雄である桃太郎の故郷でもあり、彼は文化の象徴であり、地元の人々の誇りです。岡山でユニークなエコツーリズム体験、桃太郎の旅を探検して、素晴らしい驚きを見つけましょう。',
      'sidebar_link1': '後楽園での旅',
      'sidebar_link2': '岡山城での旅',
      'footer_text': '© 2025 岡山エコツーリズムプロジェクト。無断転載を禁じます。'
    },
    'zh': {
      'nav_intro': '介绍',
      'nav_events': '活动',
      'nav_guide': '指南',
      'nav_special': '特别推荐',
      'hero_text': '探索日本三大名园之一的美景',
      'intro_title': '介绍',
      'intro_p': '位于冈山市的后乐园被广泛认为是日本三大名园之一。该园由冈山藩主池田纲政于1687年建造，是“回游式庭园”的典型代表，游客在漫步时可以欣赏到不断变化的景色。池塘、溪流、人造山丘、茶室和广阔的草坪等元素和谐地融为一体，从春季绚烂的樱花到秋季壮丽的红叶，四季皆有美景。与邻近的冈山城一起，后乐园为游客提供了一个历史与自然交融的宁静优雅的空间。',
      'seasons_title': '四季景观',
      'seasons_p': '后乐园一年四季展现出不同的美。春天，樱花和梅花盛开，景色绚丽多彩。夏天，绿草如茵，荷塘广阔，带来清凉的感觉。秋天，枫叶染上鲜艳的红黄色，整个园林笼罩在金色的光辉中。冬天，白雪轻轻覆盖，营造出宁静而梦幻的氛围。四季更迭编织出的这些景色，是后乐园最大的魅力所在。',
      'season_spring': '春',
      'season_summer': '夏',
      'season_autumn': '秋',
      'season_winter': '冬',
      'events_title': '年度活动',
      'event_spring_title': '春季',
      'event_spring_p': '<b>赏樱（3月下旬至4月上旬）：</b><br>园内200多棵樱花树竞相开放，吸引众多游客前来赏花。<br><b>室外茶道表演：</b><br>在盛开的花丛中品茶，体验浓郁的日本传统文化。',
      'event_summer_title': '夏季',
      'event_summer_p': '<b>萤火虫节（6月上旬）：</b><br>游客可以观赏成千上万的萤火虫在园内溪流边飞舞。<br><b>夜间点灯活动（8月）：</b><br>园内灯火通明，灯光与音乐相结合，营造出梦幻般的空间。',
      'event_autumn_title': '秋季',
      'event_autumn_p': '<b>红叶节（11月）：</b><br>园内的枫树和银杏树色彩斑斓，还有传统艺术表演。<br><b>秋季夜间点灯</b><br>园内再次被特别的灯光装饰，突显夜色中红叶之美。',
      'event_winter_title': '冬季',
      'event_winter_p': '<b>新年庆典（1月1日至3日）：</b><br>当地居民和游客前来庆祝新年，参加射箭、日本太鼓表演、喝清酒等文化活动。<br><b>冬季传统展示：</b><br>植物被竹架覆盖以防雪，营造出独特的冬季景观。',
      'events_conclusion': '这些活动不仅赞美了四季之美，也让游客能深刻体验日本文化。',
      'guide_title': '游客指南',
      'guide_address': '地址：〒703-8257 冈山县冈山市北区后乐园1-5',
      'guide_hours_title': '开放时间：',
      'table_caption': '全年开放时间摘要',
      'th_period': '期间',
      'th_open': '开园时间',
      'th_close': '闭园时间',
      'th_last_entry': '最后入园',
      'table_special_event': '特别点灯活动',
      'guide_note': '* 全年开放。活动日（如“幻想庭园”）时间可能会有变动。',
      'special_title': '冈山城',
      'special_p': '在后乐园的宁静中漫步后，游客可以继续前往附近的历史象征——冈山城。仅需步行几分钟，您便能沉浸在这片曾是江户时代权力中心的土地的古老之美和悠久故事中。<br><b>冈山城</b>因其独特的黑色外墙而被称为“乌城”，是冈山市的历史象征之一。建于16世纪末，城堡的建筑结合了坚固的石墙和传统的日本瓦顶。从主塔可以俯瞰整个城市和旭川的景色。城堡内陈列着盔甲、武器和许多地区历史文物，为游客提供了引人入胜的体验。',
      'sidebar_p': '冈山以其温和的气候、美丽的海滩和终年的阳光而闻名。这里也是日本传说中的英雄桃太郎的故乡，他已成为当地人民的文化象征和骄傲。让我们一起探索桃太郎之旅——在冈山体验独特的生态旅游，收获意想不到的惊喜。',
      'sidebar_link1': '后乐园之旅',
      'sidebar_link2': '冈山城之旅',
      'footer_text': '© 2025 冈山生态旅游项目。版权所有。'
    },
    'ko': {
      'nav_intro': '소개',
      'nav_events': '이벤트',
      'nav_guide': '안내',
      'nav_special': '특별',
      'hero_text': '일본 3대 정원 중 하나의 아름다움을 발견하세요',
      'intro_title': '소개',
      'intro_p': '오카야마시의 고라쿠엔은 일본 3대 정원 중 하나로 널리 알려져 있습니다. 1687년 오카야마 영주 이케다 쓰나마사에 의해 만들어진 이 정원은 걸음을 옮길 때마다 다른 풍경을 즐길 수 있는 대표적인 회유식 정원입니다. 연못, 작은 시내, 인공 언덕, 다실, 넓은 잔디밭 등의 요소가 조화롭게 어우러져 봄의 벚꽃부터 가을의 단풍까지 계절마다 아름다움을 선사합니다. 인접한 오카야마성과 함께 고라쿠엔은 역사와 자연이 어우러진 조용하고 우아한 공간을 방문객에게 제공합니다.',
      'seasons_title': '사계절의 풍경',
      'seasons_p': '고라쿠엔은 일 년 내내 계절마다 다른 아름다움을 선사합니다. 봄에는 벚꽃과 매화가 만발하여 다채로운 풍경을 자아냅니다. 여름에는 푸른 잔디와 넓은 연꽃 연못이 시원함을 더합니다. 가을에는 단풍이 선명한 붉은색과 노란색으로 물들어 정원 전체가 황금빛으로 빛납니다. 겨울에는 눈이 조용히 내려앉아 고요하고 환상적인 분위기를 연출합니다. 사계절의 변화가 빚어내는 이러한 풍경이야말로 고라쿠엔의 가장 큰 매력입니다.',
      'season_spring': '봄',
      'season_summer': '여름',
      'season_autumn': '가을',
      'season_winter': '겨울',
      'events_title': '연간 행사',
      'event_spring_title': '봄',
      'event_spring_p': '<b>벚꽃놀이 (하나미) (3월 말 ~ 4월 초):</b><br>200그루가 넘는 벚나무가 정원을 화려하게 장식하며 많은 방문객들이 꽃을 즐기러 찾아옵니다.<br><b>야외 다도회:</b><br>만개한 꽃들 속에서 일본 전통의 차를 즐길 수 있습니다.',
      'event_summer_title': '여름',
      'event_summer_p': '<b>반딧불 축제 (6월 초):</b><br>정원의 시냇가를 따라 수천 마리의 반딧불이 춤추는 모습을 감상할 수 있습니다.<br><b>야간 특별 개원 (8월):</b><br>정원이 아름답게 조명되어 빛과 음악이 환상적인 공간을 만들어냅니다.',
      'event_autumn_title': '가을',
      'event_autumn_p': '<b>단풍 축제 (11월):</b><br>정원의 단풍나무와 은행나무가 화려한 색으로 물들며 전통 예술 공연도 열립니다.<br><b>가을 야간 특별 개원</b><br>정원은 다시 특별한 조명으로 장식되어 밤의 단풍의 아름다움을 돋보이게 합니다.',
      'event_winter_title': '겨울',
      'event_winter_p': '<b>새해 축제 (1월 1일 ~ 3일):</b><br>현지인과 관광객들이 새해를 맞이하기 위해 정원을 찾아 활쏘기, 일본 전통 북 공연, 축하 사케 시음 등 문화 행사에 참여합니다.<br><b>겨울 전통 장식:</b><br>눈으로부터 식물을 보호하기 위해 대나무 울타리가 설치되어 독특한 겨울 풍경을 만들어냅니다.',
      'events_conclusion': '이러한 행사들은 사계절의 아름다움을 기념할 뿐만 아니라 방문객들에게 일본 문화를 깊이 체험할 수 있는 기회를 제공합니다.',
      'guide_title': '이용 안내',
      'guide_address': '주소: 〒703-8257 오카야마현 오카야마시 기타구 고라쿠엔 1-5',
      'guide_hours_title': '개원 시간:',
      'table_caption': '연간 개원 시간 요약',
      'th_period': '기간',
      'th_open': '개원 시간',
      'th_close': '폐원 시간',
      'th_last_entry': '최종 입장',
      'table_special_event': '특별 야간 개원',
      'guide_note': '* 연중무휴. 이벤트(예: "환상정원")가 열리는 날에는 시간이 변경될 수 있습니다.',
      'special_title': '오카야마성',
      'special_p': '고라쿠엔의 평화로운 공간을 거닐고 난 후, 방문객들은 가까이에 있는 역사적 상징인 오카야마성을 방문하여 여정을 계속할 수 있습니다. 단 몇 분만 걸으면 에도 시대 권력의 중심지였던 이 땅의 고풍스러운 아름다움과 옛이야기에 흠뻑 빠져들 수 있습니다.<br><b>오카야마성</b>은 특징적인 검은 벽 때문에 "우조"(까마귀 성)라고도 불리며 오카야마시의 역사적 상징 중 하나입니다. 16세기 후반에 지어진 이 성의 건축은 견고한 돌담과 전통적인 일본 기와지붕이 결합되어 있습니다. 주 망루에서는 도시와 아사히 강의 전경을 한눈에 볼 수 있습니다. 성 안에는 갑옷, 무기 및 이 지역의 많은 역사적 유물이 전시되어 있어 방문객에게 매력적인 경험을 제공합니다.',
      'sidebar_p': '오카야마는 온화한 기후, 아름다운 해변, 그리고 일 년 내내 내리쬐는 햇살로 유명합니다. 또한 일본 민속 영웅 모모타로의 고향이기도 하며, 그는 문화적 상징이자 현지인들의 자부심이 되었습니다. 오카야마에서 독특한 생태 관광 체험인 모모타로 여정을 탐험하고 즐거운 놀라움을 경험해 보세요.',
      'sidebar_link1': '고라쿠엔에서의 여정',
      'sidebar_link2': '오카야마성에서의 여정',
      'footer_text': '© 2025 오카야마 생태 관광 프로젝트. 모든 권리 보유.'
    },
    'fr': {
      'nav_intro': 'Introduction',
      'nav_events': 'Événements',
      'nav_guide': 'Guide',
      'nav_special': 'Spécial',
      'hero_text': "Découvrez la beauté de l'un des trois plus célèbres jardins du Japon",
      'intro_title': 'Introduction',
      'intro_p': "Le jardin Korakuen dans la ville d'Okayama est largement connu comme l'un des Trois Grands Jardins du Japon. Construit en 1687 par le seigneur d'Okayama, Ikeda Tsunamasa, ce jardin est un exemple typique de jardin de promenade (kaiyū-shiki teien), où les visiteurs peuvent admirer différents paysages à chaque pas. Des éléments tels que des étangs, des ruisseaux, des collines artificielles, des maisons de thé et de vastes pelouses se marient harmonieusement, offrant une beauté à chaque saison – des cerisiers en fleurs éclatants au printemps aux magnifiques feuilles rouges en automne. Avec le château d'Okayama adjacent, Korakuen offre aux visiteurs un espace calme et élégant où l'histoire et la nature convergent.",
      'seasons_title': 'Paysages Saisonniers',
      'seasons_p': "Le jardin Korakuen offre une beauté différente à chaque saison de l'année. Au printemps, les cerisiers et les pruniers fleurissent brillamment, créant une scène colorée. En été, les pelouses vertes et le grand étang de lotus apportent une sensation de fraîcheur. En automne, les feuilles d'érable prennent une teinte rouge et jaune vif, couvrant tout le jardin d'une lueur dorée. En hiver, une légère neige recouvre doucement le paysage, créant une atmosphère calme et magique. Ce sont ces scènes, tissées par le changement des quatre saisons, qui constituent la plus grande attraction de Korakuen.",
      'season_spring': 'Printemps',
      'season_summer': 'Été',
      'season_autumn': 'Automne',
      'season_winter': 'Hiver',
      'events_title': 'Événements Annuels',
      'event_spring_title': 'Printemps',
      'event_spring_p': '<b>Observation des cerisiers en fleurs (Hanami) (fin mars - début avril) :</b><br>Tout le jardin est resplendissant avec plus de 200 cerisiers, attirant de nombreux visiteurs. <br><b>Cérémonie du thé en plein air :</b><br>Déguster du thé au milieu des fleurs en pleine floraison, une tradition riche de la culture japonaise.',
      'event_summer_title': 'Été',
      'event_summer_p': '<b>Festival des lucioles (début juin) :</b><br>Les visiteurs peuvent observer des milliers de lucioles voler le long du ruisseau dans le jardin. <br><b>Événement d\'illumination nocturne (août) :</b><br>Le jardin est magnifiquement illuminé, combinant lumière et musique pour créer un espace magique.',
      'event_autumn_title': 'Automne',
      'event_autumn_p': '<b>Festival d\'observation des feuilles rouges (novembre) :</b><br>Les érables et les ginkgos du jardin changent de couleurs vives, avec des spectacles d\'arts traditionnels.<br><b>Illumination nocturne d\'automne</b><br>Le jardin est à nouveau décoré d\'un éclairage spécial, mettant en valeur la beauté des feuilles rouges la nuit.',
      'event_winter_title': 'Hiver',
      'event_winter_p': '<b>Festival du Nouvel An (1er au 3 janvier) :</b><br>Les habitants et les touristes viennent au jardin pour célébrer la nouvelle année, en participant à des activités culturelles telles que le tir à l\'arc, des spectacles de tambours japonais et la dégustation de saké. <br><b>Exposition traditionnelle d\'hiver :</b><br>Les plantes sont protégées de la neige par des abris en bambou, créant un paysage hivernal caractéristique.',
      'events_conclusion': 'Ces événements ne célèbrent pas seulement la beauté des quatre saisons, mais permettent également aux visiteurs de découvrir en profondeur la culture japonaise.',
      'guide_title': 'Informations Visiteurs',
      'guide_address': 'Adresse : 1-5 Korakuen, Kita-ku, Okayama-shi, Okayama-ken 703-8257',
      'guide_hours_title': 'Heures d\'ouverture :',
      'table_caption': "Résumé des heures d'ouverture",
      'th_period': 'Période',
      'th_open': 'Ouverture',
      'th_close': 'Fermeture',
      'th_last_entry': 'Dernière entrée',
      'table_special_event': 'Événement d\'illumination spéciale',
      'guide_note': '* Le jardin est ouvert toute l\'année. Les horaires peuvent changer les jours d\'événements (par exemple, "Gensō Teien").',
      'special_title': 'Château d\'Okayama',
      'special_p': 'Après une promenade dans l\'espace paisible du jardin Korakuen, les visiteurs peuvent continuer leur voyage en visitant le château d\'Okayama, un symbole historique situé à proximité. À quelques minutes de marche, vous serez immergé dans la beauté ancienne et les histoires de cette terre qui fut autrefois le centre du pouvoir à l\'époque d\'Edo. <br><b>Le château d\'Okayama</b>, également connu sous le nom de "U-jō" (Château du Corbeau), est remarquable pour ses murs noirs caractéristiques et constitue l\'un des symboles historiques de la ville d\'Okayama. Construit à la fin du XVIe siècle, son architecture combine de solides murs de pierre et des toits de tuiles traditionnels japonais. Depuis le donjon principal, on peut admirer une vue panoramique de la ville et de la rivière Asahi. À l\'intérieur, des armures, des armes et de nombreux objets historiques régionaux sont exposés, offrant aux visiteurs une expérience fascinante.',
      'sidebar_p': "Okayama est célèbre pour son climat doux, ses belles plages et son ensoleillement toute l'année. C'est aussi la patrie de Momotaro, le héros du folklore japonais, qui est devenu un symbole culturel et une fierté pour les habitants. Explorez le voyage de Momotaro, une expérience d'écotourisme unique à Okayama, pour de délicieuses surprises.",
      'sidebar_link1': 'Voyage à Korakuen',
      'sidebar_link2': 'Voyage au Château d\'Okayama',
      'footer_text': '© 2025 Projet Écotourisme Okayama. Tous droits réservés.'
    }
  };

  function setLang(lang) {
    document.documentElement.lang = lang; // Cập nhật thuộc tính lang của thẻ html
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        // Sử dụng innerHTML để các thẻ như <b>, <br> vẫn được giữ lại
        el.innerHTML = translations[lang][key];
      }
    });
  }


  // =======================================================================
  // CÁC SCRIPT HIỆU ỨNG KHÁC (GIỮ NGUYÊN)
  // =======================================================================
  window.addEventListener('scroll', function () {
    const specialEvent = document.querySelector('.chip');
    if (!specialEvent) return;

    const rect = specialEvent.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      specialEvent.style.backgroundColor = '#ffe4b5';
      specialEvent.style.boxShadow = '0 0 15px rgba(255, 180, 100, 0.8)';
      specialEvent.style.transition = 'all 0.5s ease';
    } else {
      specialEvent.style.backgroundColor = '';
      specialEvent.style.boxShadow = '';
    }
  });

  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
