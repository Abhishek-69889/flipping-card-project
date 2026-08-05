module.exports = {
  theme: {
    extend: {
      animation: {
        float: "float 8s ease-in-out infinite",
        glowingBorder: 'glowingBorder 3s linear infinite',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        glowingBorder: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
