interface ComponentPageProps {
  params: {
    slug: string
  }
}
export default function ComponentPage(
  props: ComponentPageProps
): Promise<import("react/jsx-runtime").JSX.Element>
