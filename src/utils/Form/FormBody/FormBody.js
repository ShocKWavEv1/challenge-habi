import { useContext, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/Button/Button"
import { Input } from "../../../components/Input/Input";
import { RadioContainer } from "../../../components/Radio/Radio";
import { Text } from "../../../components/Text/Text";
import MainContext from "../../../context/context";

const FormBody = ({ pageData, totalSteps }) => {
    const navigate = useNavigate();

    const contextService = useContext(MainContext);

    const nameForm = pageData.fields.input.name;

    useEffect(() => {
        console.log(contextService.payload[nameForm], nameForm);
        // eslint-disable-next-line
    }, [contextService]);

	const {
		register,
		handleSubmit,
		unregister,
		formState: { errors },
	} = useForm({ mode: "onChange", reValidateMode: "onChange" });

	const onSubmit = (data) => {
        contextService.handlePayload({[nameForm]: data[nameForm]}, nameForm)
        localStorage.setItem([nameForm], data[nameForm]);
        localStorage.setItem("currentIdx", pageData.component.nextStep);
        unregister(pageData.fields.input.name);
		navigate(`${pageData.component.nextStep}`);
	};

    return(
        <div style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }} >
            <div style={{ width: "100%", padding: "30px 0px" }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ width: "100%" }} >
                        <Text variant={["SMBOLD", "SMBOLD", "MDBOLD", "LGBOLD"]} >
                            {pageData.fields.label}
                        </Text>
                        <div style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column" }} >
                            {
                                pageData.fields.input.type === "text" || 
                                pageData.fields.input.type === "email" || 
                                pageData.fields.input.type === "number" ?
                                <Input 
                                    label={pageData.fields.label}
                                    name={pageData.fields.input.name}
                                    placeholder={pageData.fields.placeholder}
                                    id={pageData.fields.input.name}
                                    {...register(pageData.fields.input.name, {
                                        value: contextService.payload[nameForm] === null || contextService.payload[nameForm] === undefined ? "" : contextService.payload[nameForm],
                                        min: pageData.fields.input.min,
                                        max: pageData.fields.input.max,
                                        pattern: pageData.fields.input.pattern,
                                        required: pageData.fields.input.required ? "Este campo es requerido" : null,
                                    })}
                                    type={pageData.fields.input.type}
                                /> : null
                            }
                            {
                                pageData.fields.input.type === "radio" &&
                                <div style={{ width: "250px" }} >
                                    {pageData.fields.input.options.map((option) => (
                                        <RadioContainer key={option}>
                                            <input
                                                type="radio"
                                                id={option}
                                                name={pageData.fields.input.name}
                                                value={option}
                                                 {...register(pageData.fields.input.name, {
                                                    value: contextService.payload[nameForm] === null || contextService.payload[nameForm] === undefined ? "" : contextService.payload[nameForm],
                                                    onChange: (e) => console.log(e),
                                                    required: pageData.fields.input.required ? "Este campo es requerido" : null,
                                                })}
                                            ></input>
                                            <Text variant="XSMEDIUM" htmlFor={option}>{option}</Text>
                                        </RadioContainer>
                                    ))}
                                    {/*
                                        pageData.fields.input.subOptions &&
                                        <div style={{ width: "100%" }} >
                                            <Text variant="LGBOLD" >
                                                {pageData.fields.input.subOptions.label}
                                             </Text>
                                            {
                                                pageData.fields.input.subOptions.options.map((subOption) => (
                                                    <RadioContainer key={subOption}>
                                                        <input
                                                            type="radio"
                                                            id={subOption}
                                                            name={pageData.fields.input.subOptions.name}
                                                            value={subOption}
                                                            {...register(pageData.fields.input.subOptions.name, 
                                                                {
                                                                    value: "",
                                                                    onChange: (e) => console.log(e),
                                                                    required: pageData.fields.input.subOptions.required ? "Este campo es requerido" : null,
                                                                })}
                                                        ></input>
                                                        <Text variant="XSMEDIUM" htmlFor={subOption}>
                                                            {subOption}
                                                        </Text>
                                                    </RadioContainer>
                                                                                                
                                                ))
                                            }
                                        </div>
                                    */}
                                </div>
                            }
                            {
                                pageData.fields.input.type === "currency" &&
                                <CurrencyInput
                                    className="currency-input"
                                    placeholder={pageData.fields.placeholder}
                                    prefix="$"
                                    decimalsLimit={2}
                                    {...register(pageData.fields.input.name, {
                                        value: contextService.payload[nameForm] === null || contextService.payload[nameForm] === undefined ? "" : contextService.payload[nameForm],
                                        min: pageData.fields.input.min,
                                        max: pageData.fields.input.max,
                                        required: pageData.fields.input.required ? "Este campo es requerido" : null,
                                    })}
                                />
                            }
                            {
                                errors && 
                                <div style={{ marginTop: "10px" }} >
                                    <Text variant={["XSMEDIUM", "XSMEDIUM", "XSMEDIUM", "XSMEDIUM"]} color="error">
                                        {errors[pageData.fields.input.name]?.message}
                                    </Text>
                                </div>
                            }
                        </div>
                    </div>
                    <div style={{ width: "100%", paddingTop: "40px", display: "flex", alignItems: "center", justifyContent: "flex-end", flexDirection: "row" }} >
                        {
                            pageData.component.prevStep &&
                            <Button onClick={() => {navigate(pageData.component.prevStep); unregister(pageData.fields.input.name);}} variant="outline" type="button" >
                                Atrás
                            </Button>
                        }
                        <div style={{ marginLeft: 10 }} >
                            <Button type="submit" variant="solid" >
                                {
                                    pageData.component.index === totalSteps ? 'Finalizar' : 'Siguiente'
                                }
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormBody