import React from 'react'
import ExcelJS from 'exceljs/dist/es5/exceljs.browser.js'
import { saveAs } from 'file-saver'

export default function Excel() {
    const onReport=async ()=>{
        const wb = new ExcelJS.Workbook();

        const sheet1 = wb.addWorksheet('Rekap', {
            views: [{showGridLines: false}]
        });
        let borderStyles = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
        const alignSetting=(cell,position)=>{
            sheet1.getCell(cell).alignment={ vertical: 'middle', horizontal: position}

        }
        const fontSetting=(cell)=>{
            sheet1.getCell(cell).font={
                name: 'Calibri',
                family: 4,
                size: 12,
                bold:true
            }
        }
        let single_addres=['A','B','C','D','E','F','G','H','I']
        let head=[
            'Informasi Project','Tanggal Terdaftar','Nama Peserta','Jenis Kelamin','Tanggal Lahir','Kota Asal','No.KTP','Telepon','Email'
        ]
        single_addres.map((d,i)=>{
            sheet1.mergeCells(`${d}1`,`${d}3`)
            sheet1.getCell(`${d}1`).value=head[i]
            fontSetting(`${d}1`)
            alignSetting(`${d}1`,'center')
        })
        
        
        //disc
        let disc_parent=['J1','J2','N2','R2']
        let disc_addres=['J','K','L','M','N','O','P','Q','R','S','T','U']
        let disc_abj=['D','I','S','C','D','I','S','C','D','I','S','C',]
        sheet1.mergeCells('J1','U1')
        sheet1.getCell('J1').value="DISC"
        sheet1.mergeCells('J2','M2')
        sheet1.getCell('J2').value="Grafik1"
        sheet1.mergeCells('N2','Q2')
        sheet1.getCell('N2').value="Grafik2"
        sheet1.mergeCells('R2','U2')
        sheet1.getCell('R2').value="Grafik3"
        
        disc_parent.map((d)=>{
            fontSetting(d)
            alignSetting(d,'center')
        })
        disc_addres.map((d,i)=>{
            sheet1.getCell(`${d}3`).value=disc_abj[i]
            fontSetting(`${d}3`)
            alignSetting(`${d}3`,'center')
        })

        //klasifikasi disc
        sheet1.mergeCells('V1','V3')
        sheet1.getCell('V1').value="Klasifikasi DISC"
        fontSetting('V1')
        alignSetting('V1','center')

        //IQ
        sheet1.mergeCells('W1','W3')
        sheet1.getCell('W1').value="IQ"
        fontSetting('W1')
        alignSetting('W1','center')

        sheet1.mergeCells('X1','AA2')
        // sheet1.mergeCells('X1','X2')
        sheet1.getCell('X1').value="IQ"
        sheet1.getCell('X3').value="Subtest 1"
        sheet1.getCell('Y3').value="Subtest 2"
        sheet1.getCell('Z3').value="Subtest 3"
        sheet1.getCell('AA3').value="Subtest 4"
        fontSetting('X1')
        alignSetting('X1','center')
        fontSetting('X3')
        alignSetting('X3','center')
        fontSetting('Y3')
        alignSetting('Y3','center')
        fontSetting('Z3')
        alignSetting('Z3','center')
        fontSetting('AA3')
        alignSetting('AA3','center')


        sheet1.eachRow(function(row, rowNumber) {
            row.eachCell({ includeEmpty: true }, function(cell, cellNumber) {
                cell.border = borderStyles;
            });
        })
        const buf = await wb.xlsx.writeBuffer()
        
        

        saveAs(new Blob([buf]), `dumm.xlsx`)
    }
    return (
        <div>
            <button onClick={onReport}>report</button>
        </div>
    )
}
