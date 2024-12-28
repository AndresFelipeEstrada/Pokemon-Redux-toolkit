import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

export const StarButton = ({ isFavorite, onClick }: Props) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return (
    <Button icon={<Icon style={{ cursor: "pointer" }} />} onClick={onClick} />
  );
};
