const CustomInput = ({ value, label }) => {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                placeholder="Adicionar Tarefa"
                className="custom-input"
            />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                ></label>
            ) : null}
        </div>
    );
};

export default CustomInput;
