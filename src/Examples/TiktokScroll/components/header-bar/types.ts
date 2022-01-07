export type HomeHeaderBarProps = {
  safeAreaTop?: boolean /* add padding top to make nav bar safe area */;
  enableShadow?: boolean /* enableShadow */;
  backArrow?: boolean;
  onPressSearch?: () => void;
  title?: string;
};
