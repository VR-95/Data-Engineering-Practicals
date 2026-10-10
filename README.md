# Data Engineering Practicals

Practical journal and programs for the **Data Engineering** subject — B. K. Birla College, Kalyan.

| | |
|---|---|
| **Name** | Vedant Vinod Rakshe |
| **Roll No.** | 37 |
| **Student ID** | 5176220 |
| **Subject** | Data Engineering |
| **Practicals** | 1 to 10 |

> Practical 10 (Mini Project) was completed as a group with **Aayushman Rajeev Verma** (Roll No. 57, Student ID 5176202).

---

## Contents

| No. | Practical | Tools | Files |
|----:|-----------|-------|-------|
| 1 | Parsing Text, CSV, HTML, XML and JSON, binary files, regular expressions and SQL CRUD | Python, Pandas, BeautifulSoup, `struct`, `re`, SQLite | [`practical_01_data_formats_regex_sql`](practical_01_data_formats_regex_sql) |
| 2 | ETL process in Power BI (Extract, Transform, Load) | Power BI Desktop, Power Query | [`practical_02_powerbi_etl`](practical_02_powerbi_etl) |
| 3 | MongoDB operations (single and multiple document insert and retrieval) | MongoDB, `mongosh` | [`practical_03_mongodb`](practical_03_mongodb) |
| 4 | Preprocessing, normalisation, noise elimination, feature selection and EDA | Pandas, NumPy, Matplotlib, scikit-learn | [`practical_04_preprocessing_eda`](practical_04_preprocessing_eda) |
| 5 | Extracting data from a REST API and flat files | Python, Requests, Pandas | [`practical_05_data_extraction`](practical_05_data_extraction) |
| 6 | Installing Apache Airflow and creating a scheduled DAG | Apache Airflow | [`practical_06_airflow_dag`](practical_06_airflow_dag) |
| 7 | ETL pipelines: CSV and JSON sources, invalid records, validation, incremental loading | Pandas, SQLite | [`practical_07_etl_pipelines`](practical_07_etl_pipelines) |
| 8 | Distributed data processing with PySpark DataFrames | PySpark | [`practical_08_pyspark`](practical_08_pyspark) |
| 9 | End-to-end pipelines: e-commerce ETL with historical and newly arriving data | Pandas, SQLite, Matplotlib | [`practical_09_end_to_end_pipelines`](practical_09_end_to_end_pipelines) |
| 10 | **Mini project:** Retail Sales Data Warehouse (end-to-end solution, star schema) | Pandas, SQLite, Matplotlib | [`practical_10_mini_project_retail_dw`](practical_10_mini_project_retail_dw) |

The complete written journal (aim, code, output screenshots and conclusion for every practical) is in the [`journal`](journal) folder as both `.docx` and `.pdf`.

---

## Repository structure

```text
data-engineering-practicals/
├── README.md
├── requirements.txt
├── .gitignore
├── journal/
│   ├── Data_Engineering_Practical_Journal_Vedant_Rakshe.docx
│   └── Data_Engineering_Practical_Journal_Vedant_Rakshe.pdf
├── practical_01_data_formats_regex_sql/     # notebook
├── practical_02_powerbi_etl/                # .pbix + PDF report
├── practical_03_mongodb/                    # mongosh script + PDF report
├── practical_04_preprocessing_eda/          # notebook
├── practical_05_data_extraction/            # notebook
├── practical_06_airflow_dag/                # notebook
├── practical_07_etl_pipelines/              # notebook
├── practical_08_pyspark/                    # notebook
├── practical_09_end_to_end_pipelines/       # notebook
└── practical_10_mini_project_retail_dw/     # .py + notebook, source data, warehouse.db, reports, charts
```

---

## How to run

### 1. Get the code

```bash
git clone https://github.com/<your-username>/data-engineering-practicals.git
cd data-engineering-practicals
```

### 2. Set up Python (3.10 or newer)

```bash
python -m venv .venv
# Windows:  .venv\Scripts\activate
# macOS/Linux:  source .venv/bin/activate
pip install -r requirements.txt
```

### 3. Open a notebook

```bash
jupyter notebook
```

Open the notebook inside any `practical_XX_...` folder and choose **Run All**. The notebooks create their own sample input files in the working directory, so no extra data download is needed. They also work in Google Colab (upload the `.ipynb` file).

### Notes per practical

* **Practical 2 (Power BI):** open the `.pbix` file in Power BI Desktop (Windows only). It was built from an Excel workbook with the *Products*, *Orders* and *Order_Details* tables; if Power BI asks for the data source path, point it to your copy of that workbook. The PDF shows every step with screenshots.
* **Practical 3 (MongoDB):** install MongoDB and `mongosh`, then run `mongosh --file practical_03_mongodb.js`. The PDF shows the outputs.
* **Practical 5:** the notebook calls `https://jsonplaceholder.typicode.com/users`. If the API cannot be reached, it automatically uses a cached copy of the same data and says so in the output.
* **Practical 6 (Airflow):** works on Linux, macOS, WSL2 or Colab. The notebook installs Airflow, writes the DAG (`university_etl_orchestration`, runs daily) and the extraction script into `~/airflow`, and validates the DAG. To see it run: `airflow standalone`, open <http://localhost:8080>, unpause the DAG and trigger it.
* **Practical 8 (PySpark):** needs Java 17 or newer installed (Google Colab already has it). The notebook runs `%pip install pyspark`.
* **Practical 10 (mini project):** run the whole pipeline as a script:
  ```bash
  cd practical_10_mini_project_retail_dw
  python practical_10_group_project_retail_dw.py
  ```
  It regenerates `source/*.csv`, `warehouse.db`, `reports/*.csv` and the three charts.

---

## Practical 10 — Mini project overview

A retail sales data warehouse built end to end:

1. **Sources:** `customers.csv`, `products.csv`, `transactions.csv` (1,236 raw transactions)
2. **Ingestion:** raw files stored in a RAW layer of the database
3. **Cleaning:** duplicates, bad formats and invalid rows rejected (1,236 → 1,128 transactions)
4. **Transformation:** derived amounts, dimensions and surrogate keys
5. **Warehouse:** star schema with one fact table and four dimension tables in SQLite (`warehouse.db`), foreign keys verified
6. **Reporting:** SQL KPIs, top products, top customers, monthly revenue, revenue by category and city, plus a dashboard chart

Headline result: **1,128 orders, 3,112 units, net revenue Rs. 15,239,825.50, average order value Rs. 13,510.48**.

Group members: Vedant Vinod Rakshe (Roll 37, ID 5176220) and Aayushman Rajeev Verma (Roll 57, ID 5176202).

---

## Author

**Vedant Vinod Rakshe** · Roll No. 37 · Student ID 5176220
