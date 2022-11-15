 export default function stableSort<T>(array: T[] | undefined) {
    const stabilizedThis = array?.map((el, index) => [el, index] as [T, number])
    return stabilizedThis?.map((el) => el[0])
  }