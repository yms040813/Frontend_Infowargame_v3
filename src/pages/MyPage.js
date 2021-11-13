import MyPageTemplete from "../components/MyPage/MyPageTemplete";
import MyPageProviders from "../providers/MyPageProviders";

const MyPage = () => {
  return (
    <MyPageProviders>
      <MyPageTemplete />
    </MyPageProviders>
  );
};

export default MyPage;
