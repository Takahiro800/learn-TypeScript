import 'tailwindcss/tailwind.css'

export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  variant?: TextVariant
  children: string
}

export const Text = (props: TextProps) => {
  const { variant, children } = props

  return (
    <p className="text-base text-gray-700">
      {children}
      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil. */}
    </p>
  )
}
