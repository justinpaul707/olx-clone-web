const TextError: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="text-danger">{children}</div>
);
export default TextError;