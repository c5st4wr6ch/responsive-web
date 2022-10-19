import React, { useEffect, useState } from 'react';
import { Card } from "antd";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // components
// import _get from 'lodash/get';
// import _cloneDeep from 'lodash/cloneDeep';
// import { useRecoilState } from 'recoil';
// import { Link, useHistory, useParams } from 'react-router-dom';
// import _isEmpty from 'lodash/isEmpty';
// import { apiAnom, Service } from 'api';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { QueryCategoryShop } from 'components/QueryTemplates/QueryCategoryShop';
// import { QueryListProductShop } from 'components/QueryTemplates/QueryListProductShop';
// import { QueryCategoryListShop } from 'components/QueryTemplates/QueryCategoryListShop';
// import NotFoundSearch from 'components/Molecules/NotFoundSearch/Products';
// import SVGIcon from '../../../components/Atoms/IconSvg';
// import { productShopState } from 'atoms/productShopState'; // for detail
// import { listProductShopState } from 'atoms/listProductShopState'; // for list product
// import MetaAttributes from 'components/Atoms/MetaAttributes';
// // images
// import DefaultImage from '../../../static/assets/images/logo-big.png';
// //styles
// import './products.less';

function CardProducts(props) {
  // const { Option } = Select;
  // const { CheckableTag } = Tag;
  const { Meta } = Card;

  // let history = useHistory();
  // let params = useParams();
  // let queryProducts = QueryListProductShop;

  // const { getFieldDecorator } = props.form;
  // // const form = Form.useForm(); // antd not v4 yet
  // const pathname = window.location.pathname;

  // let idCategory = params.id; // get category id from url
  // let slugCategory = params.id; // get category id from url
  // let allCategories = []; // for category id & slug find
  // let allProducts = [];

  // const [categoryID, setCategoryID] = useState([]);
  // const [category, setCategory] = useState([]); // for category selector
  // const [listProducts, setListProducts] = useRecoilState(listProductShopState); // LIST
  // const [loading, setLoading] = useState(false);
  // const [categoryVisible, setCategoryVisible] = useState(false); // modal category
  // const [filterVisible, setFilterVisible] = useState(false); // modal filter
  // const [countFilter, setCountFilter] = useState(0); // for filter badge
  // const [filter, setFilter] = useState({});
  // const [selectedTags, setSelectedTags] = useState([]);
  // const [productState, setProductState] = useRecoilState(productShopState); // DETAIL
  // const [metaAttributes, setMetaAttributes] = useState([]); // meta attributes for slug+title

  // useEffect(() => {
  //   listCategory();
  //   getCategory();
  // }, []);

  // useEffect(() => {
  //   setCategoryVisible(false);
  //   setFilterVisible(false);
  //   getProducts(slugCategory);
  // }, [slugCategory]);

  // // for sort
  // const sortName = [
  //   { label: 'Terbaru', value: 'createdAt' },
  //   { label: 'Harga Terendah', value: 'lowestPrice' },
  //   { label: 'Harga Tertinggi', value: 'highestPrice' },
  // ];

  // // for filter by type
  // const tagsData = ['E-voucher', 'Produk Fisik'];
  // const handleChange = (tag, checked) => {
  //   const nextSelectedTags = checked
  //     ? [...selectedTags, tag]
  //     : selectedTags.filter((t) => t !== tag);
  //   setSelectedTags(nextSelectedTags);
  // };

  // // for category selector
  // const getCategory = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await apiAnom.post(
  //       Service.PRODUCTS + 'categories/list',
  //       QueryCategoryShop
  //     );
  //     const listCategory = _get(res, 'data.content.categories');
  //     allProducts = listCategory.map((c) => (c.category.id)); // set id for all products
  //     allCategories = listCategory.map((c) => (c.category)); // set id for all categories
  //     idCategory = _get(allCategories.find(a => a.slug == slugCategory), "id", slugCategory); // set id

  //     setCategory(listCategory);
      
  //     // semua product: default title+desc
  //     setMetaAttributes(listCategory.map((ct) => ({
  //       id: ct.category?.id,
  //       name: (ct.category?.name ? ct.category?.name : "Semua Produk"),
  //       title: (ct.category?.title ? ct.category?.title : "Solusi untuk Semua Kebutuhan Ibu dan Anak | Ruangmom Shop"),
  //       description: (ct.category?.description ? ct.category?.description : "Beli produk kesehatan keluarga, kebutuhan ibu hamil, perlengkapan bayi dan anak, voucher dan promo terbaik hanya di Ruangmom Shop"),
  //       slug: (ct.category?.slug ? ct.category?.slug : ""),
  //     }) ));

  //     // getProducts(idCategory);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  //   setTimeout(function() {
  //     setLoading(false);
  //   }, 2000);
  // };

  // // for category selector
  // const getCategoryID = async (slugCategory) => {
  //   try {
  //     const res = await apiAnom.post(
  //       Service.PRODUCTS + 'categories/list',
  //       QueryCategoryShop
  //     );
  //     const listCategory = _get(res, 'data.content.categories');
  //     allProducts = listCategory.map((c) => (c.category.id)); // set id for all products
  //     allCategories = listCategory.map((c) => (c.category)); // set id for all categories
  //     let searchIdCategory = _get(allCategories.find(a => a.slug == slugCategory), "id", slugCategory); // set id

  //     return searchIdCategory;
  //   } catch (error) {
  //     setLoading(false);
  //   }
  //   setTimeout(function() {
  //     setLoading(false);
  //   }, 2000);
  // };

  // let ProductQuery = _cloneDeep(queryProducts);
  // async function getProducts (slugCategory) {
  //   // get products by selected category or all categories
  //   let thisCategory = await getCategoryID(slugCategory);
    
  //   if (slugCategory == 'produk') { // idCategory == 'CAT007'
  //     ProductQuery.includes.categories = allProducts;
  //   }
  //   else {
  //     ProductQuery.includes.categories = [ thisCategory ]; // [ _get(metaAttributes.find(a => a.slug == slugCategory), "id", slugCategory) ];
  //   }
  //   try {
  //     const res = await apiAnom.post(
  //       Service.PRODUCTS_LIST,
  //       ProductQuery
  //     );
  //     const resProducts = _get(res, 'data.content.products');
  //     setListProducts(resProducts);
  //   } catch (error) {}
  // };

  // const formatRupiah = (money) => {
  //   return new Intl.NumberFormat('id-ID',
  //     { currency: 'IDR', minimumFractionDigits: 0 }
  //   ).format(money);
  // };

  // const handleSelectChange = (id_cat) => {
  //   history.push('/shopping/' + id_cat);
  // };

  // // https://stackoverflow.com/a/1054862
  // function convertToSlug(text) {
  //   return text.toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
  // }

  // const handleDetail = (value) => {
  //   setProductState({
  //     ...productState,
  //     data: value
  //   })
  //   localStorage.setItem('mom_back_url', '/shopping/' + idCategory);// set back-btn url
  //   history.push("/shopping/produk/" + convertToSlug(value.variant_name) + "---" + value.business.id);
  // };

  // const listCategory = async() => {
  //   let categoryQuery = _cloneDeep(QueryCategoryListShop);
  //   try {
  //     let res = await api.post(
  //       Service.PRODUCTS + "categories/list",
  //       categoryQuery
  //     );
  //     let resData = _get(res, "data.content.categories");
  //     let listID = resData.map((item) => item?.category?.id);
  //     setCategoryID(listID);
  //   } catch (error) {}
  // };

  // const defaultValueText = ["evoucher", "tangible"]
  // const submitFilter = () => {
  //   ProductQuery.queries.sorts[0].field = filter.sort === "createdAt" ? "created_at" : "final_price";
  //   ProductQuery.queries.sorts[0].order = filter.sort === "lowestPrice" ? 1 : 2;
  //   ProductQuery.includes.attributes[0].value_text = 
  //     selectedTags.length === 1 && selectedTags[0] === "E-voucher" 
  //       ? ["evoucher"] 
  //       : selectedTags.length === 1 && selectedTags[0] === "Produk Fisik" 
  //       ? ["tangible"]
  //       : defaultValueText
  //   ProductQuery.includes.categories = categoryID;

  //   // set filter for badge
  //   let value = props.form.getFieldsValue();
  //   let idSort = _get(value, "sort_name"); // undefined or string
  //   let badgeCount = (idSort ? 1 : 0) + selectedTags.length;
  //   setCountFilter(badgeCount);

  //   getProducts(idCategory);
  //   setFilterVisible(false)
  // };

  // // clearFilter only for button value
  // const clearFilter = () => {
  //   props.form.setFieldsValue({
  //     sort_name: undefined,
  //   });
  //   setSelectedTags([]);
  // }

  // //resetFilter for clear + update results
  // const resetFilter = () => {
  //   ProductQuery.queries.sorts[0].field = "created_at";
  //   ProductQuery.queries.sorts[0].order = 2;
  //   ProductQuery.includes.attributes[0].value_text = defaultValueText;
  //   getProducts(idCategory);
  //   setFilterVisible(false)
  //   setCountFilter(0);
  // };

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  )
};

export default CardProducts;