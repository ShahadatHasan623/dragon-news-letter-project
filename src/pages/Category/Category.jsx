import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  //  console.log(data)
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const categoryNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(categoryNews);
    } else {
      const categoryNews = data.filter((news) => news.category_id == id);
      setCategoryNews(categoryNews);
    }
  }, [data, id]);

  return <div>
    <h1 className="font-bold">Dragon News Home</h1>
    <div className="grid grid-cols-1 gap-5 mt-5">
        {
            categoryNews.map(newsCard=><NewsCard newsCard={newsCard} key={newsCard.id}></NewsCard>)
        }
    </div>
  </div>;
};

export default Category;
