import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketAction";

const Card = ({ product }) => {
  const { cart } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  // ekrana basılan ürün sepette bulunuyor mu ?
  const found = cart?.find((cartItem) => cartItem.id === product.id);

  // + butonuna tıklanınca
  const handleAdd = () => {
    found
      ? // eleman sepette varsa miktarını 1 attır
        dispatch(updateItem(found.id, found.amount + 1))
      : // eleman sepette yoksa sepete ekle
        dispatch(createItem(product));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300 ">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 my-1">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold">{product.price}$</p>
      </div>

      <div className="relative">
        <img
          src={product.photo}
          className="rounded-md object-cover size-full"
        />

        <button
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center font-bold"
          onClick={handleAdd}
        >
          {found ? found.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default Card;