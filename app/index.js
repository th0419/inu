import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Loading from "./loading";

const Index = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('select'); // リダイレクト先の画面名に合わせて変更
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    // ここにローディング画面のコンポーネントを配置する
    <Loading />
  );
};

export default Index;
