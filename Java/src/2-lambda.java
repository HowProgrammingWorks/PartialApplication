import java.util.function.Function;

class Lambda {
    public static void main(String[] args) {
        Function<Double,Double> lg = (Double n) -> log(10d, n);
        Function<Double,Double> ln = (Double n) -> log(Math.E, n);
        //usage
        System.out.println(lg.apply(1000d));
        System.out.println(ln.apply(Math.E*Math.E));
    }

    private static Double log(Double base, Double n)
    {
        return Math.log(n)/ Math.log(base);
    }
}
